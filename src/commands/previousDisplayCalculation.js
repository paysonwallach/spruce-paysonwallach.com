/*
 * Spruce
 *
 * Copyright 2019 Payson Wallach
 *
 * Released under the terms of the GNU General Public License, version 3
 * (https://gnu.org/licenses/gpl.html)
 *
 * This file incorporates work covered by the following copyright and
 * permission notice:
 *
 *  Copyright (c) 2017 Eric Czarny eczarny@gmail.com
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a
 *  copy of this software and associated documentation files (the "Software"),
 *  to deal in the Software without restriction, including without limitation
 *  the rights to use, copy, modify, merge, publish, distribute, sublicense,
 *  and/or sell copies of the Software, and to permit persons to whom the
 *  Software is furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included
 *  in all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 *  THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 *  FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 *  DEALINGS IN THE SOFTWARE.
 */

const WindowActions = spruce.imports.windowActions;
const NextOrPreviousScreen = spruce.imports.nextOrPreviousScreen;

var name = WindowActions.PREVIOUS_DISPLAY;
var transform = (
  windowRect,
  visibleFrameOfSourceScreen,
  visibleFrameOfDestinationScreen
) => {
  return NextOrPreviousScreen.moveWindowRectToScreen(
    windowRect,
    visibleFrameOfDestinationScreen
  );
};
