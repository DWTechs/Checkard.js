
import { throwError } from './error';

/**
 * Checks if the given value is an HTML element.
 *
 * This function determines if the provided value is an instance of `HTMLElement`.
 * It first checks if `HTMLElement` is defined as an object and then verifies if
 * the value is an instance of `HTMLElement`. If `HTMLElement` is not defined,
 * it falls back to checking if the value is an object with a `nodeType` of 1
 * and a `nodeName` of type string, which are characteristics of HTML elements.
 *
 * @param {unknown} h - The value to check.
 * @param {boolean} [throwErr=false] - If true, throws an error when value is not an HTML element. If false, returns false.
 * @returns {boolean} `true` if the value is an HTML element, false if not (when throwErr is false).
 * @throws {Error} Throws an error if the value is not an HTML element and throwErr is true.
 */
function isHtmlElement(h: unknown, throwErr: boolean = false): h is HTMLElement {
  
  // Check if HTMLElement is available as a constructor and check instance type
  if (typeof HTMLElement === "object" && h instanceof HTMLElement 
      || h // Fallback for environments where HTMLElement is not available (DOM2)
        && typeof h === "object" // Check if it's an object with HTMLElement characteristics
        && (h as Node).nodeType === 1 
        && typeof (h as Node).nodeName === "string")
    return true;
  
  if (throwErr)
    throwError('HTML element', h);
  
  return false;
}

/**
 * Checks if a given string is a valid HTML event attribute.
 *
 * @param {unknown} h - The value to check.
 * @param {boolean} [throwErr=false] - If true, throws an error when value is not a valid HTML event attribute. If false, returns false.
 * @returns {boolean} `true` if the string is a valid HTML event attribute, false if not (when throwErr is false).
 * @throws {Error} Throws an error if the value is not a valid HTML event attribute and throwErr is true.
 *
 * @remarks
 * This function checks against a predefined list of HTML event attributes such as `onclick`, `onload`, `onerror`, etc.
 *
 * @example
 * ```typescript
 * isHtmlEventAttribute("onclick"); // returns true
 * isHtmlEventAttribute("onunknown"); // returns false
 * ```
 */
function isHtmlEventAttribute(h: unknown, throwErr: boolean = false): boolean {
  switch (h) {
    case "onafterprint": // run after the document is printed
    case "onbeforeprint": // run before the document is printed
    case "onbeforeunload": // run when the document is about to be unloaded
    case "onerror": // run when an error occurs
    case "onhashchange": // run when there has been changes to the anchor part of the a URL
    case "onload": // Fires after page is finished loading
    case "onmessage": // run when the message is triggered
    case "onoffline": // run when the browser starts to work offline
    case "ononline": // run when the browser starts to work case "online
    case "onpagehide": // run when a user navigates away from a page
    case "onpageshow": // run when a user navigates to a page
    case "onpopstate": // run when the window's history changes
    case "onresize": // Fires whene browser window is resized
    case "onstorage": // run when a Web Storage area is updated
    case "onunload": // Fires once a page has unloaded (or the browser window has been closed)
    case "onblur": // Fires the moment that the element loses focus
    case "onchange": // Fires the moment when the value of the element is changed
    case "oncontextmenu": // Script to be run when a context menu is triggered
    case "onfocus": // Fires the moment when the element gets focus
    case "oninput": // Script to be run when an element gets user input
    case "oninvalid": // Script to be run when an element is invalid
    case "onreset": // Fires when the Reset button in a form is clicked
    case "onsearch": // Fires when the user writes something in a search field (for <input="search">)
    case "onselect": // Fires after some text has been selected in an element
    case "onsubmit": // Fires when a form is submitted
    case "onkeydown": // script	Fires when a user is pressing a key
    case "onkeypress": // script	Fires when a user presses a key
    case "onkeyup": // script	Fires when a user releases a key
    case "onclick": //	Fires on a mouse click on the element
    case "ondblclick": //	Fires on a mouse double-click on the element
    case "onmousedown": //	Fires when a mouse button is pressed down on an element
    case "onmousemove": //	Fires when the mouse pointer is moving while it is over an element
    case "onmouseout": //	Fires when the mouse pointer moves out of an element
    case "onmouseover": //	Fires when the mouse pointer moves over an element
    case "onmouseup": //	Fires when a mouse button is released over an element
    case "onmousewheel": //	Deprecated. Use the onwheel attribute instead
    case "onwheel": //	Fires when the mouse wheel rolls up or down over an element
    case "ondrag": // Script to be run when an element is dragged
    case "ondragend": // Script to be run at the end of a drag operation
    case "ondragenter": // Script to be run when an element has been dragged to a valid drop target
    case "ondragleave": // Script to be run when an element leaves a valid drop target
    case "ondragover": // Script to be run when an element is being dragged over a valid drop target
    case "ondragstart": // Script to be run at the start of a drag operation
    case "ondrop": // Script to be run when dragged element is being dropped
    case "onscroll": // Script to be run when an element's scrollbar is being scrolled
    case "oncopy": // Fires when the user copies the content of an element
    case "oncut": // Fires when the user cuts the content of an element
    case "onpaste": // Fires when the user pastes some content in an element
    case "onabort": // run on abort
    case "oncanplay": // run when a file is ready to start playing (when it has buffered enough to begin)
    case "oncanplaythrough": // run when a file can be played all the way to the end without pausing for buffering
    case "oncuechange": // run when the cue changes in a <track> element
    case "ondurationchange": // run when the length of the media changes
    case "onemptied": // run when something bad happens and the file is suddenly unavailable (like unexpectedly disconnects)
    case "onended": // run when the media has reach the end (a useful event for messages like "thanks for listening")
    case "onloadeddata": // run when media data is loaded
    case "onloadedmetadata": // run when meta data (like dimensions and duration) are loaded
    case "onloadstart": // run just as the file begins to load before unknownthing is actually loaded
    case "onpause": // run when the media is paused either by the user or programmatically
    case "onplay": // run when the media is ready to start playing
    case "onplaying": // run when the media actually has started playing
    case "onprogress": // run when the browser is in the process of getting the media data
    case "onratechange": // run each time the playback rate changes (like when a user switches to a slow motion or fast "forward mode)
    case "onseeked": // run when the seeking attribute is set to false indicating that seeking has ended
    case "onseeking": // run when the seeking attribute is set to true indicating that seeking is active
    case "onstalled": // run when the browser is unable to fetch the media data for whatever reason
    case "onsuspend": // run when fetching the media data is stopped before it is completely loaded for whatever reason
    case "ontimeupdate": // run when the playing position has changed (like when the user fast forwards to a different point in the media)
    case "onvolumechange": // run each time the volume is changed which (includes setting the volume to "mute")
    case "onwaiting": // run when the media has paused but is expected to resume (like when the media pauses to buffer more data)
    case "ontoggle": //	Fires when the user opens or closes the <details> element"
      return true;
    default:
      if (throwErr)
        throwError('HTML event attribute', h);
      return false;
  }
}

/**
 * Checks if the given value is a DOM Node.
 *
 * This function determines if the provided value is a Node by checking its type and properties.
 * It works by verifying if the value is an instance of Node when `Node` is an object, or by
 * checking the presence and types of `nodeType` and `nodeName` properties.
 *
 * @param {unknown} n - The value to check.
 * @param {boolean} [throwErr=false] - If true, throws an error when value is not a DOM Node. If false, returns false.
 * @returns {boolean} `true` if the value is a Node, false if not (when throwErr is false).
 * @throws {Error} Throws an error if the value is not a DOM Node and throwErr is true.
 */
function isNode(n: unknown, throwErr: boolean = false): n is Node {
    // Check if Node is available as a constructor and check instance type
    if (typeof Node === "object" && n instanceof Node
      || n // Fallback for environments where Node is not available (DOM2)
        && typeof n === "object" // Check if it's an object with Node characteristics
        && typeof (n as Node).nodeType === "number"  
        && typeof (n as Node).nodeName === "string"
    )
      return true;
    
    if (throwErr)
      throwError('DOM Node', n);
    
    return false;
}

export {
  isHtmlElement,
  isHtmlEventAttribute,
  isNode
};
