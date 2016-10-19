import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

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
    }

    scrollTop(): void {
        window.scroll(0, 0);
    }

}
