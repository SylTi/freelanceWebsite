import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import "rxjs/add/operator/distinctUntilChanged";

declare var ga: any;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less']
})
export class AppComponent {

    constructor(private router: Router) {
        // scroll to top on page change
        router.events.filter(event => event instanceof NavigationEnd)
            .subscribe(event => {
                window.scroll(0, 0);
            });

        // allow scrolling to #anchor
        router.events.subscribe(s => {
            if (s instanceof NavigationEnd) {
                const tree = router.parseUrl(router.url);
                if (tree.fragment) {
                    // you can use DomAdapter
                    const element = document.querySelector("#" + tree.fragment);
                    if (element) { element.scrollIntoView(element); }
                }
            }
        });

        // send pageview to Google Analytics
        ga('create', 'UA-86335924-1', 'auto');
        setTimeout(function(){ga('send', '_trackEvent', 'Control', 'Bounce Rate', '')}, 20000);

        router.events.distinctUntilChanged((previous: any, current: any) => {
            if(current instanceof NavigationEnd) {
                return previous.url === current.url;
            }
            return true;
        }).subscribe((x: any) => {
            console.log('send pageview');
            ga('send', 'pageview', x.url);
        });
    }

    scrollTop(): void {
        window.scroll(0, 0);
    }

}
