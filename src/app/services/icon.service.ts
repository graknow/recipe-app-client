import { Injectable } from '@angular/core';

import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

import { Icon } from '../enums/icons.enum';

@Injectable({ providedIn: "root" })
export class IconService {    
    constructor(
        private domSanitizer: DomSanitizer,
        private matIconRegistry: MatIconRegistry
    ) {

    }

    public registerIcons = (): void => {
        for (let name in Icon) {
            if (isNaN(Number(name))) {
                this.matIconRegistry.addSvgIcon(name, this.domSanitizer.bypassSecurityTrustResourceUrl(`/icons/${name}.svg`));
            }
        }
    }
}