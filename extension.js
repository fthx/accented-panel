//    Accented panel
//    GNOME Shell extension
//    @fthx 2025


import * as Main from 'resource:///org/gnome/shell/ui/main.js';


export default class AccentedPanelExtension {
    enable() {
        Main.panel.add_style_class_name('panel-accent');
    }

    disable() {
        Main.panel.remove_style_class_name('panel-accent');
    }
}
