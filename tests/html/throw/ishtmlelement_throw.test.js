import { isHtmlElement } from "../../../dist/ch";

describe('isHtmlElement throwErr tests', () => {
  describe('when value is not an HTML element', () => {
    test('should throw for null', () => {
      expect(() => isHtmlElement(null, true)).toThrow();
    });

    test('should throw for undefined', () => {
      expect(() => isHtmlElement(undefined, true)).toThrow();
    });

    test('should throw for string', () => {
      expect(() => isHtmlElement('not an element', true)).toThrow();
    });

    test('should throw for HTML string', () => {
      expect(() => isHtmlElement('<div>Hello</div>', true)).toThrow();
    });

    test('should throw for number', () => {
      expect(() => isHtmlElement(123, true)).toThrow();
    });

    test('should throw for boolean true', () => {
      expect(() => isHtmlElement(true, true)).toThrow();
    });

    test('should throw for boolean false', () => {
      expect(() => isHtmlElement(false, true)).toThrow();
    });

    test('should throw for plain object', () => {
      expect(() => isHtmlElement({ type: 'div' }, true)).toThrow();
    });

    test('should throw for array', () => {
      expect(() => isHtmlElement(['div', 'span'], true)).toThrow();
    });

    test('should throw for function', () => {
      expect(() => isHtmlElement(() => {}, true)).toThrow();
    });

    test('should throw for Date', () => {
      expect(() => isHtmlElement(new Date(), true)).toThrow();
    });

    test('should throw for RegExp', () => {
      expect(() => isHtmlElement(/element/, true)).toThrow();
    });

    test('should throw for Symbol', () => {
      expect(() => isHtmlElement(Symbol('element'), true)).toThrow();
    });

    test('should throw for BigInt', () => {
      expect(() => isHtmlElement(BigInt(123), true)).toThrow();
    });
  });

  describe('when value has wrong nodeType', () => {
    test('should throw for object with nodeType 2 (attribute node)', () => {
      const fakeElement = {
        nodeType: 2,
        nodeName: 'DIV'
      };
      expect(() => isHtmlElement(fakeElement, true)).toThrow();
    });

    test('should throw for object with nodeType 3 (text node)', () => {
      const fakeElement = {
        nodeType: 3,
        nodeName: '#text'
      };
      expect(() => isHtmlElement(fakeElement, true)).toThrow();
    });

    test('should throw for object with nodeType 8 (comment node)', () => {
      const fakeElement = {
        nodeType: 8,
        nodeName: '#comment'
      };
      expect(() => isHtmlElement(fakeElement, true)).toThrow();
    });

    test('should throw for object with nodeType 9 (document node)', () => {
      const fakeElement = {
        nodeType: 9,
        nodeName: '#document'
      };
      expect(() => isHtmlElement(fakeElement, true)).toThrow();
    });

    test('should throw for object with nodeType 10 (document type)', () => {
      const fakeElement = {
        nodeType: 10,
        nodeName: 'html'
      };
      expect(() => isHtmlElement(fakeElement, true)).toThrow();
    });

    test('should throw for object with nodeType 11 (document fragment)', () => {
      const fakeElement = {
        nodeType: 11,
        nodeName: '#document-fragment'
      };
      expect(() => isHtmlElement(fakeElement, true)).toThrow();
    });

    test('should throw for object with nodeType 0 (invalid)', () => {
      const fakeElement = {
        nodeType: 0,
        nodeName: 'DIV'
      };
      expect(() => isHtmlElement(fakeElement, true)).toThrow();
    });

    test('should throw for object with negative nodeType', () => {
      const fakeElement = {
        nodeType: -1,
        nodeName: 'DIV'
      };
      expect(() => isHtmlElement(fakeElement, true)).toThrow();
    });

    test('should throw for object with large nodeType', () => {
      const fakeElement = {
        nodeType: 999,
        nodeName: 'DIV'
      };
      expect(() => isHtmlElement(fakeElement, true)).toThrow();
    });
  });

  describe('when value has wrong nodeName type', () => {
    test('should throw for object with number nodeName', () => {
      const fakeElement = {
        nodeType: 1,
        nodeName: 123
      };
      expect(() => isHtmlElement(fakeElement, true)).toThrow();
    });

    test('should throw for object with boolean nodeName', () => {
      const fakeElement = {
        nodeType: 1,
        nodeName: true
      };
      expect(() => isHtmlElement(fakeElement, true)).toThrow();
    });

    test('should throw for object with object nodeName', () => {
      const fakeElement = {
        nodeType: 1,
        nodeName: { tag: 'DIV' }
      };
      expect(() => isHtmlElement(fakeElement, true)).toThrow();
    });

    test('should throw for object with array nodeName', () => {
      const fakeElement = {
        nodeType: 1,
        nodeName: ['DIV']
      };
      expect(() => isHtmlElement(fakeElement, true)).toThrow();
    });

    test('should throw for object with function nodeName', () => {
      const fakeElement = {
        nodeType: 1,
        nodeName: () => 'DIV'
      };
      expect(() => isHtmlElement(fakeElement, true)).toThrow();
    });

    test('should throw for object with null nodeName', () => {
      const fakeElement = {
        nodeType: 1,
        nodeName: null
      };
      expect(() => isHtmlElement(fakeElement, true)).toThrow();
    });

    test('should throw for object with undefined nodeName', () => {
      const fakeElement = {
        nodeType: 1,
        nodeName: undefined
      };
      expect(() => isHtmlElement(fakeElement, true)).toThrow();
    });

    test('should throw for object with Symbol nodeName', () => {
      const fakeElement = {
        nodeType: 1,
        nodeName: Symbol('DIV')
      };
      expect(() => isHtmlElement(fakeElement, true)).toThrow();
    });
  });

  describe('when value has missing properties', () => {
    test('should throw for object missing nodeType', () => {
      const fakeElement = {
        nodeName: 'DIV'
      };
      expect(() => isHtmlElement(fakeElement, true)).toThrow();
    });

    test('should throw for object missing nodeName', () => {
      const fakeElement = {
        nodeType: 1
      };
      expect(() => isHtmlElement(fakeElement, true)).toThrow();
    });

    test('should throw for object missing both properties', () => {
      const fakeElement = {
        someOtherProp: 'value'
      };
      expect(() => isHtmlElement(fakeElement, true)).toThrow();
    });

    test('should throw for empty object', () => {
      expect(() => isHtmlElement({}, true)).toThrow();
    });
  });

  describe('when value has wrong nodeType type', () => {
    test('should throw for object with string nodeType', () => {
      const fakeElement = {
        nodeType: '1',
        nodeName: 'DIV'
      };
      expect(() => isHtmlElement(fakeElement, true)).toThrow();
    });

    test('should throw for object with float nodeType', () => {
      const fakeElement = {
        nodeType: 1.5,
        nodeName: 'DIV'
      };
      expect(() => isHtmlElement(fakeElement, true)).toThrow();
    });

    test('should throw for object with boolean nodeType', () => {
      const fakeElement = {
        nodeType: true,
        nodeName: 'DIV'
      };
      expect(() => isHtmlElement(fakeElement, true)).toThrow();
    });

    test('should throw for object with object nodeType', () => {
      const fakeElement = {
        nodeType: { type: 1 },
        nodeName: 'DIV'
      };
      expect(() => isHtmlElement(fakeElement, true)).toThrow();
    });

    test('should throw for object with array nodeType', () => {
      const fakeElement = {
        nodeType: [1],
        nodeName: 'DIV'
      };
      expect(() => isHtmlElement(fakeElement, true)).toThrow();
    });

    test('should throw for object with null nodeType', () => {
      const fakeElement = {
        nodeType: null,
        nodeName: 'DIV'
      };
      expect(() => isHtmlElement(fakeElement, true)).toThrow();
    });

    test('should throw for object with undefined nodeType', () => {
      const fakeElement = {
        nodeType: undefined,
        nodeName: 'DIV'
      };
      expect(() => isHtmlElement(fakeElement, true)).toThrow();
    });

    test('should throw for object with NaN nodeType', () => {
      const fakeElement = {
        nodeType: NaN,
        nodeName: 'DIV'
      };
      expect(() => isHtmlElement(fakeElement, true)).toThrow();
    });

    test('should throw for object with Infinity nodeType', () => {
      const fakeElement = {
        nodeType: Infinity,
        nodeName: 'DIV'
      };
      expect(() => isHtmlElement(fakeElement, true)).toThrow();
    });
  });

  describe('edge cases with fake elements', () => {
    test('should not throw for object that looks like element but is not', () => {
      const almostElement = {
        nodeType: 1,
        nodeName: 'DIV',
        tagName: 'DIV',
        innerHTML: 'content'
      };
      expect(() => isHtmlElement(almostElement, true)).not.toThrow();
    });

    test('should throw for jQuery-like object', () => {
      const jqueryLike = {
        0: { nodeType: 1, nodeName: 'DIV' },
        length: 1,
        jquery: '3.6.0'
      };
      expect(() => isHtmlElement(jqueryLike, true)).toThrow();
    });

    test('should throw for NodeList', () => {
      // Simulate NodeList-like object
      const nodeListLike = {
        0: { nodeType: 1, nodeName: 'DIV' },
        1: { nodeType: 1, nodeName: 'SPAN' },
        length: 2
      };
      expect(() => isHtmlElement(nodeListLike, true)).toThrow();
    });

    test('should throw for virtual DOM element', () => {
      const virtualElement = {
        type: 'div',
        props: { className: 'test' },
        children: ['Hello']
      };
      expect(() => isHtmlElement(virtualElement, true)).toThrow();
    });
  });

  describe('with different object types', () => {
    test('should throw for Map', () => {
      expect(() => isHtmlElement(new Map(), true)).toThrow();
    });

    test('should throw for Set', () => {
      expect(() => isHtmlElement(new Set(), true)).toThrow();
    });

    test('should throw for WeakMap', () => {
      expect(() => isHtmlElement(new WeakMap(), true)).toThrow();
    });

    test('should throw for WeakSet', () => {
      expect(() => isHtmlElement(new WeakSet(), true)).toThrow();
    });

    test('should throw for Promise', () => {
      expect(() => isHtmlElement(Promise.resolve(), true)).toThrow();
    });

    test('should throw for Error', () => {
      expect(() => isHtmlElement(new Error(), true)).toThrow();
    });

    test('should throw for ArrayBuffer', () => {
      expect(() => isHtmlElement(new ArrayBuffer(8), true)).toThrow();
    });

    test('should throw for DataView', () => {
      expect(() => isHtmlElement(new DataView(new ArrayBuffer(8)), true)).toThrow();
    });
  });

  describe('special string cases', () => {
    test('should throw for empty string', () => {
      expect(() => isHtmlElement('', true)).toThrow();
    });

    test('should throw for HTML tag name only', () => {
      expect(() => isHtmlElement('div', true)).toThrow();
    });

    test('should throw for HTML with attributes', () => {
      expect(() => isHtmlElement('<div class="test">content</div>', true)).toThrow();
    });

    test('should throw for self-closing tag', () => {
      expect(() => isHtmlElement('<img src="test.jpg" />', true)).toThrow();
    });

    test('should throw for XML string', () => {
      expect(() => isHtmlElement('<?xml version="1.0"?><root></root>', true)).toThrow();
    });

    test('should throw for JSON string', () => {
      expect(() => isHtmlElement('{"tag": "div", "content": "test"}', true)).toThrow();
    });
  });
});