import { isNode } from "../../../dist/ch";

describe('isNode throwErr tests', () => {
  describe('when value is not a DOM Node', () => {
    test('should throw for null', () => {
      expect(() => isNode(null, true)).toThrow();
    });

    test('should throw for undefined', () => {
      expect(() => isNode(undefined, true)).toThrow();
    });

    test('should throw for string', () => {
      expect(() => isNode('not a node', true)).toThrow();
    });

    test('should throw for HTML string', () => {
      expect(() => isNode('<div>Hello</div>', true)).toThrow();
    });

    test('should throw for number', () => {
      expect(() => isNode(123, true)).toThrow();
    });

    test('should throw for boolean true', () => {
      expect(() => isNode(true, true)).toThrow();
    });

    test('should throw for boolean false', () => {
      expect(() => isNode(false, true)).toThrow();
    });

    test('should throw for plain object', () => {
      expect(() => isNode({ type: 'element' }, true)).toThrow();
    });

    test('should throw for array', () => {
      expect(() => isNode(['div', 'span'], true)).toThrow();
    });

    test('should throw for function', () => {
      expect(() => isNode(() => {}, true)).toThrow();
    });

    test('should throw for Date', () => {
      expect(() => isNode(new Date(), true)).toThrow();
    });

    test('should throw for RegExp', () => {
      expect(() => isNode(/node/, true)).toThrow();
    });

    test('should throw for Symbol', () => {
      expect(() => isNode(Symbol('node'), true)).toThrow();
    });

    test('should throw for BigInt', () => {
      expect(() => isNode(BigInt(123), true)).toThrow();
    });
  });

  describe('when value has wrong nodeType type', () => {
    test('should throw for object with string nodeType', () => {
      const fakeNode = {
        nodeType: '1',
        nodeName: 'DIV'
      };
      expect(() => isNode(fakeNode, true)).toThrow();
    });

    test('should throw for object with boolean nodeType', () => {
      const fakeNode = {
        nodeType: true,
        nodeName: 'DIV'
      };
      expect(() => isNode(fakeNode, true)).toThrow();
    });

    test('should throw for object with object nodeType', () => {
      const fakeNode = {
        nodeType: { type: 1 },
        nodeName: 'DIV'
      };
      expect(() => isNode(fakeNode, true)).toThrow();
    });

    test('should throw for object with array nodeType', () => {
      const fakeNode = {
        nodeType: [1],
        nodeName: 'DIV'
      };
      expect(() => isNode(fakeNode, true)).toThrow();
    });

    test('should throw for object with function nodeType', () => {
      const fakeNode = {
        nodeType: () => 1,
        nodeName: 'DIV'
      };
      expect(() => isNode(fakeNode, true)).toThrow();
    });

    test('should throw for object with null nodeType', () => {
      const fakeNode = {
        nodeType: null,
        nodeName: 'DIV'
      };
      expect(() => isNode(fakeNode, true)).toThrow();
    });

    test('should throw for object with undefined nodeType', () => {
      const fakeNode = {
        nodeType: undefined,
        nodeName: 'DIV'
      };
      expect(() => isNode(fakeNode, true)).toThrow();
    });

    test('should not throw for object with NaN nodeType', () => {
      const fakeNode = {
        nodeType: NaN,
        nodeName: 'DIV'
      };
      expect(() => isNode(fakeNode, true)).not.toThrow();
    });

    test('should not throw for object with Infinity nodeType', () => {
      const fakeNode = {
        nodeType: Infinity,
        nodeName: 'DIV'
      };
      expect(() => isNode(fakeNode, true)).not.toThrow();
    });

    test('should not throw for object with negative nodeType', () => {
      const fakeNode = {
        nodeType: -1,
        nodeName: 'DIV'
      };
      expect(() => isNode(fakeNode, true)).not.toThrow();
    });

    test('should not throw for object with float nodeType', () => {
      const fakeNode = {
        nodeType: 1.5,
        nodeName: 'DIV'
      };
      expect(() => isNode(fakeNode, true)).not.toThrow();
    });
  });

  describe('when value has wrong nodeName type', () => {
    test('should throw for object with number nodeName', () => {
      const fakeNode = {
        nodeType: 1,
        nodeName: 123
      };
      expect(() => isNode(fakeNode, true)).toThrow();
    });

    test('should throw for object with boolean nodeName', () => {
      const fakeNode = {
        nodeType: 1,
        nodeName: true
      };
      expect(() => isNode(fakeNode, true)).toThrow();
    });

    test('should throw for object with object nodeName', () => {
      const fakeNode = {
        nodeType: 1,
        nodeName: { name: 'DIV' }
      };
      expect(() => isNode(fakeNode, true)).toThrow();
    });

    test('should throw for object with array nodeName', () => {
      const fakeNode = {
        nodeType: 1,
        nodeName: ['DIV']
      };
      expect(() => isNode(fakeNode, true)).toThrow();
    });

    test('should throw for object with function nodeName', () => {
      const fakeNode = {
        nodeType: 1,
        nodeName: () => 'DIV'
      };
      expect(() => isNode(fakeNode, true)).toThrow();
    });

    test('should throw for object with null nodeName', () => {
      const fakeNode = {
        nodeType: 1,
        nodeName: null
      };
      expect(() => isNode(fakeNode, true)).toThrow();
    });

    test('should throw for object with undefined nodeName', () => {
      const fakeNode = {
        nodeType: 1,
        nodeName: undefined
      };
      expect(() => isNode(fakeNode, true)).toThrow();
    });

    test('should throw for object with Symbol nodeName', () => {
      const fakeNode = {
        nodeType: 1,
        nodeName: Symbol('DIV')
      };
      expect(() => isNode(fakeNode, true)).toThrow();
    });

    test('should throw for object with BigInt nodeName', () => {
      const fakeNode = {
        nodeType: 1,
        nodeName: BigInt(123)
      };
      expect(() => isNode(fakeNode, true)).toThrow();
    });
  });

  describe('when value has missing properties', () => {
    test('should throw for object missing nodeType', () => {
      const fakeNode = {
        nodeName: 'DIV'
      };
      expect(() => isNode(fakeNode, true)).toThrow();
    });

    test('should throw for object missing nodeName', () => {
      const fakeNode = {
        nodeType: 1
      };
      expect(() => isNode(fakeNode, true)).toThrow();
    });

    test('should throw for object missing both properties', () => {
      const fakeNode = {
        someOtherProp: 'value'
      };
      expect(() => isNode(fakeNode, true)).toThrow();
    });

    test('should throw for empty object', () => {
      expect(() => isNode({}, true)).toThrow();
    });

    test('should throw for object with only other DOM properties', () => {
      const fakeNode = {
        tagName: 'DIV',
        innerHTML: 'content',
        className: 'test'
      };
      expect(() => isNode(fakeNode, true)).toThrow();
    });
  });

  describe('when value has invalid nodeType values', () => {
    test('should not throw for object with nodeType 0', () => {
      const fakeNode = {
        nodeType: 0,
        nodeName: 'INVALID'
      };
      expect(() => isNode(fakeNode, true)).not.toThrow();
    });

    test('should not throw for object with nodeType 13', () => {
      const fakeNode = {
        nodeType: 13,
        nodeName: 'INVALID'
      };
      expect(() => isNode(fakeNode, true)).not.toThrow();
    });

    test('should not throw for object with very large nodeType', () => {
      const fakeNode = {
        nodeType: 999,
        nodeName: 'INVALID'
      };
      expect(() => isNode(fakeNode, true)).not.toThrow();
    });

    test('should not throw for object with negative nodeType', () => {
      const fakeNode = {
        nodeType: -5,
        nodeName: 'INVALID'
      };
      expect(() => isNode(fakeNode, true)).not.toThrow();
    });
  });

  describe('edge cases with fake nodes', () => {
    test('should throw for jQuery-like object', () => {
      const jqueryLike = {
        0: { nodeType: 1, nodeName: 'DIV' },
        length: 1,
        jquery: '3.6.0',
        get: () => {}
      };
      expect(() => isNode(jqueryLike, true)).toThrow();
    });

    test('should throw for virtual DOM element', () => {
      const virtualNode = {
        type: 'div',
        props: { className: 'test' },
        children: ['Hello'],
        key: null,
        ref: null
      };
      expect(() => isNode(virtualNode, true)).toThrow();
    });

    test('should throw for React-like element', () => {
      const reactElement = {
        $$typeof: Symbol.for('react.element'),
        type: 'div',
        props: {},
        key: null,
        ref: null
      };
      expect(() => isNode(reactElement, true)).toThrow();
    });

    test('should not throw for object that partially looks like node', () => {
      const almostNode = {
        nodeType: 1,
        nodeName: 'DIV',
        tagName: 'DIV',
        innerHTML: 'content',
        style: {},
        className: 'test'
      };
      expect(() => isNode(almostNode, true)).not.toThrow();
    });
  });

  describe('with different object types', () => {
    test('should throw for Map', () => {
      expect(() => isNode(new Map(), true)).toThrow();
    });

    test('should throw for Set', () => {
      expect(() => isNode(new Set(), true)).toThrow();
    });

    test('should throw for WeakMap', () => {
      expect(() => isNode(new WeakMap(), true)).toThrow();
    });

    test('should throw for WeakSet', () => {
      expect(() => isNode(new WeakSet(), true)).toThrow();
    });

    test('should throw for Promise', () => {
      expect(() => isNode(Promise.resolve(), true)).toThrow();
    });

    test('should throw for Error', () => {
      expect(() => isNode(new Error(), true)).toThrow();
    });

    test('should throw for ArrayBuffer', () => {
      expect(() => isNode(new ArrayBuffer(8), true)).toThrow();
    });

    test('should throw for DataView', () => {
      expect(() => isNode(new DataView(new ArrayBuffer(8)), true)).toThrow();
    });

    test('should throw for URL', () => {
      expect(() => isNode(new URL('https://example.com'), true)).toThrow();
    });
  });

  describe('special string cases', () => {
    test('should throw for empty string', () => {
      expect(() => isNode('', true)).toThrow();
    });

    test('should throw for HTML tag name only', () => {
      expect(() => isNode('div', true)).toThrow();
    });

    test('should throw for complete HTML element string', () => {
      expect(() => isNode('<div class="test">content</div>', true)).toThrow();
    });

    test('should throw for self-closing tag string', () => {
      expect(() => isNode('<img src="test.jpg" />', true)).toThrow();
    });

    test('should throw for text content', () => {
      expect(() => isNode('Hello World', true)).toThrow();
    });

    test('should throw for comment string', () => {
      expect(() => isNode('<!-- This is a comment -->', true)).toThrow();
    });

    test('should throw for CDATA string', () => {
      expect(() => isNode('<![CDATA[some data]]>', true)).toThrow();
    });

    test('should throw for XML string', () => {
      expect(() => isNode('<?xml version="1.0"?><root></root>', true)).toThrow();
    });

    test('should throw for DOCTYPE string', () => {
      expect(() => isNode('<!DOCTYPE html>', true)).toThrow();
    });
  });

  describe('array-like and collection-like objects', () => {
    test('should throw for NodeList-like object', () => {
      const nodeListLike = {
        0: { nodeType: 1, nodeName: 'DIV' },
        1: { nodeType: 1, nodeName: 'SPAN' },
        length: 2,
        item: () => {},
        namedItem: () => {}
      };
      expect(() => isNode(nodeListLike, true)).toThrow();
    });

    test('should throw for HTMLCollection-like object', () => {
      const htmlCollectionLike = {
        0: { nodeType: 1, nodeName: 'DIV' },
        length: 1,
        item: () => {},
        namedItem: () => {}
      };
      expect(() => isNode(htmlCollectionLike, true)).toThrow();
    });

    test('should throw for arguments object', () => {
      function testFunc() {
        expect(() => isNode(arguments, true)).toThrow();
      }
      testFunc(1, 2, 3);
    });

    test('should throw for regular array', () => {
      expect(() => isNode([1, 2, 3], true)).toThrow();
    });

    test('should throw for typed array', () => {
      expect(() => isNode(new Uint8Array([1, 2, 3]), true)).toThrow();
    });
  });

  describe('edge cases with property access', () => {
    test('should throw for object with getter that throws', () => {
      const obj = {
        get nodeType() { throw new Error('Access denied'); },
        nodeName: 'DIV'
      };
      expect(() => isNode(obj, true)).toThrow();
    });

    test('should throw for object with non-enumerable properties', () => {
      const obj = {};
      Object.defineProperty(obj, 'nodeType', { value: 'not a number', enumerable: false });
      Object.defineProperty(obj, 'nodeName', { value: 123, enumerable: false });
      expect(() => isNode(obj, true)).toThrow();
    });

    test('should throw for frozen object with wrong types', () => {
      const obj = Object.freeze({
        nodeType: 'string',
        nodeName: 123
      });
      expect(() => isNode(obj, true)).toThrow();
    });

    test('should throw for sealed object with wrong types', () => {
      const obj = Object.seal({
        nodeType: true,
        nodeName: false
      });
      expect(() => isNode(obj, true)).toThrow();
    });
  });
});