import { Component, Input, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
    selector: 'app-side-menu',
    templateUrl: './side-menu.component.html',
    styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

    @Input()
    drawer?: MatSidenav;
    selectedItem: string = "home";
    userName!: string;

    constructor() {
    }

    ngOnInit(): void {
        this.userName = "Dear Admin";
    }

    closeDrawer() {
        if (this.drawer?.mode != "side")
            this.drawer?.close();
    }

    signOut() {

    }

}
