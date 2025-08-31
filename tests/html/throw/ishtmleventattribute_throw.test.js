import { isHtmlEventAttribute } from "../../../dist/ch";

describe('isHtmlEventAttribute throwErr tests', () => {
  describe('when value is not a valid HTML event attribute', () => {
    test('should throw for null', () => {
      expect(() => isHtmlEventAttribute(null, true)).toThrow();
    });

    test('should throw for undefined', () => {
      expect(() => isHtmlEventAttribute(undefined, true)).toThrow();
    });

    test('should throw for number', () => {
      expect(() => isHtmlEventAttribute(123, true)).toThrow();
    });

    test('should throw for boolean true', () => {
      expect(() => isHtmlEventAttribute(true, true)).toThrow();
    });

    test('should throw for boolean false', () => {
      expect(() => isHtmlEventAttribute(false, true)).toThrow();
    });

    test('should throw for object', () => {
      expect(() => isHtmlEventAttribute({ event: 'click' }, true)).toThrow();
    });

    test('should throw for array', () => {
      expect(() => isHtmlEventAttribute(['onclick'], true)).toThrow();
    });

    test('should throw for function', () => {
      expect(() => isHtmlEventAttribute(() => {}, true)).toThrow();
    });

    test('should throw for Date', () => {
      expect(() => isHtmlEventAttribute(new Date(), true)).toThrow();
    });

    test('should throw for RegExp', () => {
      expect(() => isHtmlEventAttribute(/onclick/, true)).toThrow();
    });

    test('should throw for Symbol', () => {
      expect(() => isHtmlEventAttribute(Symbol('onclick'), true)).toThrow();
    });

    test('should throw for BigInt', () => {
      expect(() => isHtmlEventAttribute(BigInt(123), true)).toThrow();
    });
  });

  describe('when string is not a valid event attribute', () => {
    test('should throw for empty string', () => {
      expect(() => isHtmlEventAttribute('', true)).toThrow();
    });

    test('should throw for random string', () => {
      expect(() => isHtmlEventAttribute('randomstring', true)).toThrow();
    });

    test('should throw for HTML tag name', () => {
      expect(() => isHtmlEventAttribute('div', true)).toThrow();
    });

    test('should throw for CSS property', () => {
      expect(() => isHtmlEventAttribute('color', true)).toThrow();
    });

    test('should throw for JavaScript keyword', () => {
      expect(() => isHtmlEventAttribute('function', true)).toThrow();
    });

    test('should throw for JavaScript method', () => {
      expect(() => isHtmlEventAttribute('addEventListener', true)).toThrow();
    });

    test('should throw for DOM property', () => {
      expect(() => isHtmlEventAttribute('innerHTML', true)).toThrow();
    });

    test('should throw for DOM method', () => {
      expect(() => isHtmlEventAttribute('appendChild', true)).toThrow();
    });
  });

  describe('when string is similar but not exact event attribute', () => {
    test('should throw for missing "on" prefix', () => {
      expect(() => isHtmlEventAttribute('click', true)).toThrow();
    });

    test('should throw for wrong case', () => {
      expect(() => isHtmlEventAttribute('onClick', true)).toThrow();
    });

    test('should throw for uppercase', () => {
      expect(() => isHtmlEventAttribute('ONCLICK', true)).toThrow();
    });

    test('should throw for mixed case', () => {
      expect(() => isHtmlEventAttribute('OnClick', true)).toThrow();
    });

    test('should throw for camelCase', () => {
      expect(() => isHtmlEventAttribute('onMouseOver', true)).toThrow();
    });

    test('should throw for extra characters', () => {
      expect(() => isHtmlEventAttribute('onclick1', true)).toThrow();
    });

    test('should throw for extra prefix', () => {
      expect(() => isHtmlEventAttribute('xonclick', true)).toThrow();
    });

    test('should throw for extra suffix', () => {
      expect(() => isHtmlEventAttribute('onclickx', true)).toThrow();
    });

    test('should throw for spaces', () => {
      expect(() => isHtmlEventAttribute('on click', true)).toThrow();
    });

    test('should throw for underscores', () => {
      expect(() => isHtmlEventAttribute('on_click', true)).toThrow();
    });

    test('should throw for hyphens', () => {
      expect(() => isHtmlEventAttribute('on-click', true)).toThrow();
    });
  });

  describe('when string is non-standard event attribute', () => {
    test('should throw for custom event attribute', () => {
      expect(() => isHtmlEventAttribute('oncustom', true)).toThrow();
    });

    test('should throw for framework-specific event', () => {
      expect(() => isHtmlEventAttribute('onreact', true)).toThrow();
    });

    test('should throw for deprecated event', () => {
      expect(() => isHtmlEventAttribute('onpropertychange', true)).toThrow();
    });

    test('should throw for unknown event', () => {
      expect(() => isHtmlEventAttribute('onunknown', true)).toThrow();
    });

    test('should throw for made-up event', () => {
      expect(() => isHtmlEventAttribute('onfakevent', true)).toThrow();
    });

    test('should throw for IE-specific event', () => {
      expect(() => isHtmlEventAttribute('onbeforeactivate', true)).toThrow();
    });

    test('should throw for mobile-specific event', () => {
      expect(() => isHtmlEventAttribute('ontouchstart', true)).toThrow();
    });

    test('should throw for gesture event', () => {
      expect(() => isHtmlEventAttribute('ongesturestart', true)).toThrow();
    });

    test('should throw for pointer event', () => {
      expect(() => isHtmlEventAttribute('onpointerdown', true)).toThrow();
    });

    test('should throw for transition event', () => {
      expect(() => isHtmlEventAttribute('ontransitionend', true)).toThrow();
    });

    test('should throw for animation event', () => {
      expect(() => isHtmlEventAttribute('onanimationend', true)).toThrow();
    });
  });

  describe('when string has whitespace or special characters', () => {
    test('should throw for leading space', () => {
      expect(() => isHtmlEventAttribute(' onclick', true)).toThrow();
    });

    test('should throw for trailing space', () => {
      expect(() => isHtmlEventAttribute('onclick ', true)).toThrow();
    });

    test('should throw for leading and trailing spaces', () => {
      expect(() => isHtmlEventAttribute(' onclick ', true)).toThrow();
    });

    test('should throw for tab character', () => {
      expect(() => isHtmlEventAttribute('onclick\t', true)).toThrow();
    });

    test('should throw for newline character', () => {
      expect(() => isHtmlEventAttribute('onclick\n', true)).toThrow();
    });

    test('should throw for carriage return', () => {
      expect(() => isHtmlEventAttribute('onclick\r', true)).toThrow();
    });

    test('should throw for unicode characters', () => {
      expect(() => isHtmlEventAttribute('onclíck', true)).toThrow();
    });

    test('should throw for emoji', () => {
      expect(() => isHtmlEventAttribute('onclick🎯', true)).toThrow();
    });
  });

  describe('when string has numbers or special symbols', () => {
    test('should throw for numbers in event name', () => {
      expect(() => isHtmlEventAttribute('onclick2', true)).toThrow();
    });

    test('should throw for leading numbers', () => {
      expect(() => isHtmlEventAttribute('2onclick', true)).toThrow();
    });

    test('should throw for numbers in middle', () => {
      expect(() => isHtmlEventAttribute('on2click', true)).toThrow();
    });

    test('should throw for special characters', () => {
      expect(() => isHtmlEventAttribute('onclick!', true)).toThrow();
    });

    test('should throw for at symbol', () => {
      expect(() => isHtmlEventAttribute('onclick@', true)).toThrow();
    });

    test('should throw for hash symbol', () => {
      expect(() => isHtmlEventAttribute('onclick#', true)).toThrow();
    });

    test('should throw for dollar sign', () => {
      expect(() => isHtmlEventAttribute('onclick$', true)).toThrow();
    });

    test('should throw for percent sign', () => {
      expect(() => isHtmlEventAttribute('onclick%', true)).toThrow();
    });

    test('should throw for ampersand', () => {
      expect(() => isHtmlEventAttribute('onclick&', true)).toThrow();
    });

    test('should throw for asterisk', () => {
      expect(() => isHtmlEventAttribute('onclick*', true)).toThrow();
    });

    test('should throw for parentheses', () => {
      expect(() => isHtmlEventAttribute('onclick()', true)).toThrow();
    });
  });

  describe('when string is HTML-related but not event attribute', () => {
    test('should throw for HTML attributes', () => {
      expect(() => isHtmlEventAttribute('id', true)).toThrow();
    });

    test('should throw for class attribute', () => {
      expect(() => isHtmlEventAttribute('class', true)).toThrow();
    });

    test('should throw for style attribute', () => {
      expect(() => isHtmlEventAttribute('style', true)).toThrow();
    });

    test('should throw for src attribute', () => {
      expect(() => isHtmlEventAttribute('src', true)).toThrow();
    });

    test('should throw for href attribute', () => {
      expect(() => isHtmlEventAttribute('href', true)).toThrow();
    });

    test('should throw for alt attribute', () => {
      expect(() => isHtmlEventAttribute('alt', true)).toThrow();
    });

    test('should throw for title attribute', () => {
      expect(() => isHtmlEventAttribute('title', true)).toThrow();
    });

    test('should throw for type attribute', () => {
      expect(() => isHtmlEventAttribute('type', true)).toThrow();
    });

    test('should throw for value attribute', () => {
      expect(() => isHtmlEventAttribute('value', true)).toThrow();
    });

    test('should throw for name attribute', () => {
      expect(() => isHtmlEventAttribute('name', true)).toThrow();
    });

    test('should throw for placeholder attribute', () => {
      expect(() => isHtmlEventAttribute('placeholder', true)).toThrow();
    });

    test('should throw for required attribute', () => {
      expect(() => isHtmlEventAttribute('required', true)).toThrow();
    });

    test('should throw for disabled attribute', () => {
      expect(() => isHtmlEventAttribute('disabled', true)).toThrow();
    });

    test('should throw for readonly attribute', () => {
      expect(() => isHtmlEventAttribute('readonly', true)).toThrow();
    });

    test('should throw for checked attribute', () => {
      expect(() => isHtmlEventAttribute('checked', true)).toThrow();
    });

    test('should throw for selected attribute', () => {
      expect(() => isHtmlEventAttribute('selected', true)).toThrow();
    });

    test('should throw for multiple attribute', () => {
      expect(() => isHtmlEventAttribute('multiple', true)).toThrow();
    });

    test('should throw for data attribute', () => {
      expect(() => isHtmlEventAttribute('data-test', true)).toThrow();
    });

    test('should throw for aria attribute', () => {
      expect(() => isHtmlEventAttribute('aria-label', true)).toThrow();
    });
  });

  describe('edge cases with common mistakes', () => {
    test('should throw for partial event name', () => {
      expect(() => isHtmlEventAttribute('on', true)).toThrow();
    });

    test('should throw for event name without action', () => {
      expect(() => isHtmlEventAttribute('onmouse', true)).toThrow();
    });

    test('should throw for similar sounding events', () => {
      expect(() => isHtmlEventAttribute('onklick', true)).toThrow();
    });

    test('should throw for abbreviated events', () => {
      expect(() => isHtmlEventAttribute('onclk', true)).toThrow();
    });

    test('should throw for event with typo', () => {
      expect(() => isHtmlEventAttribute('onlcick', true)).toThrow();
    });

    test('should throw for event with missing letter', () => {
      expect(() => isHtmlEventAttribute('onlick', true)).toThrow();
    });

    test('should throw for event with extra letter', () => {
      expect(() => isHtmlEventAttribute('oncclick', true)).toThrow();
    });

    test('should throw for reversed event', () => {
      expect(() => isHtmlEventAttribute('kcilcno', true)).toThrow();
    });
  });
});