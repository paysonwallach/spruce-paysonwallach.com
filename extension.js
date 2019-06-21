/*
 * Spruce
 *
 * Copyright (c) 2019 Payson Wallach
 *
 * Released under the terms of the GNU General Public License, version 3
 * (https://gnu.org/licenses/gpl.html)
 */

window.spruce = imports.misc.extensionUtils.getCurrentExtension();

const Convenience = spruce.imports.convenience;
const { StatusMenuItem } = spruce.imports.statusMenuItem;

let statusMenuItem;

function init() {
  Convenience.initTranslations();
}

function enable() {
  statusMenuItem = new StatusMenuItem();
  statusMenuItem.enable();
}

function disable() {
  statusMenuItem.disable();
  statusMenuItem = null;
}
