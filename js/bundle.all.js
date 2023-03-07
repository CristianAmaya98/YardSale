"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
(function () {
  function r(e, n, t) {
    function o(i, f) {
      if (!n[i]) {
        if (!e[i]) {
          var c = "function" == typeof require && require;
          if (!f && c) return c(i, !0);
          if (u) return u(i, !0);
          var a = new Error("Cannot find module '" + i + "'");
          throw a.code = "MODULE_NOT_FOUND", a;
        }
        var p = n[i] = {
          exports: {}
        };
        e[i][0].call(p.exports, function (r) {
          var n = e[i][1][r];
          return o(n || r);
        }, p, p.exports, r, e, n, t);
      }
      return n[i].exports;
    }
    for (var u = "function" == typeof require && require, i = 0; i < t.length; i++) o(t[i]);
    return o;
  }
  return r;
})()({
  1: [function (require, module, exports) {
    var _require = require('./controllers'),
      counterCartShopping = _require.counterCartShopping,
      getAllProducts = _require.getAllProducts;
    var _require2 = require('./controllers/ShoppingCartController'),
      showShoppingCart = _require2.showShoppingCart;
    var logo = document.querySelector('#logo');
    logo.addEventListener('click', function () {
      getAllProducts();
    });
    counterCartShopping();
    getAllProducts();
    showShoppingCart();
  }, {
    "./controllers": 10,
    "./controllers/ShoppingCartController": 9
  }],
  2: [function (require, module, exports) {
    var _require3 = require('./core/Components'),
      ComponentElementDiv = _require3.ComponentElementDiv,
      ComponentAttribute = _require3.ComponentAttribute,
      ComponentElementImage = _require3.ComponentElementImage,
      ComponenteElementSpan = _require3.ComponenteElementSpan,
      ComponentElementP = _require3.ComponentElementP,
      ComponentEvent = _require3.ComponentEvent;
    module.exports = function (product) {
      var _product$product, _product$product2, _product$product3;
      var onAddShopping = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
      var onDetaillProduct = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};
      return new ComponentElementDiv({
        attributes: [new ComponentAttribute({
          id: 'class',
          value: 'producto'
        })],
        children: [new ComponentElementImage({
          attributes: [new ComponentAttribute({
            id: 'class',
            value: 'producto__imagen'
          })],
          events: [new ComponentEvent({
            event: 'click',
            callback: function callback() {
              onDetaillProduct(product);
            }
          })],
          urlImage: (_product$product = product.product) === null || _product$product === void 0 ? void 0 : _product$product.image
        }), new ComponentElementDiv({
          attributes: [new ComponentAttribute({
            id: 'class',
            value: 'producto__info'
          })],
          children: [new ComponentElementDiv({
            attributes: [new ComponentAttribute({
              id: 'class',
              value: 'producto__textos'
            })],
            children: [new ComponentElementP({
              attributes: [new ComponentAttribute({
                id: 'class',
                value: 'producto__price'
              })],
              text: "$ ".concat(Number((_product$product2 = product.product) === null || _product$product2 === void 0 ? void 0 : _product$product2.price).toLocaleString('es-CO'))
            }), new ComponentElementP({
              attributes: [new ComponentAttribute({
                id: 'class',
                value: 'producto__name'
              })],
              text: (_product$product3 = product.product) === null || _product$product3 === void 0 ? void 0 : _product$product3.name
            })]
          }), new ComponenteElementSpan({
            attributes: [new ComponentAttribute({
              id: 'class',
              value: 'producto__icon-cart'
            })],
            events: [new ComponentEvent({
              event: 'click',
              callback: function callback() {
                onAddShopping(product.product);
              }
            })]
          })]
        })]
      });
    };
  }, {
    "./core/Components": 3
  }],
  3: [function (require, module, exports) {
    function ComponentAttribute(_ref) {
      var id = _ref.id,
        value = _ref.value;
      this.id = id;
      this.value = value;
    }
    function ComponentEvent(_ref2) {
      var _ref2$event = _ref2.event,
        event = _ref2$event === void 0 ? '' : _ref2$event,
        _ref2$callback = _ref2.callback,
        callback = _ref2$callback === void 0 ? function () {} : _ref2$callback;
      this.event = event;
      this.callback = callback;
    }
    function _ComponentElement(_ref3) {
      var element = _ref3.element,
        _ref3$attributes = _ref3.attributes,
        attributes = _ref3$attributes === void 0 ? [] : _ref3$attributes,
        _ref3$children = _ref3.children,
        children = _ref3$children === void 0 ? [] : _ref3$children,
        _ref3$text = _ref3.text,
        text = _ref3$text === void 0 ? '' : _ref3$text,
        _ref3$events = _ref3.events,
        events = _ref3$events === void 0 ? [] : _ref3$events;
      var elementHTML = document.createElement(element);
      if (attributes.length > 0) {
        attributes.forEach(function (attribute) {
          if (attribute instanceof ComponentAttribute) {
            var id = attribute.id,
              value = attribute.value;
            elementHTML.setAttribute(id, value);
          }
        });
      }
      if (text !== '') {
        elementHTML.innerText = text;
      }
      if (children.length > 0) {
        children.forEach(function (child) {
          elementHTML.appendChild(child);
        });
      }
      if (events.length > 0) {
        events.forEach(function (_ref4) {
          var event = _ref4.event,
            callback = _ref4.callback;
          elementHTML.addEventListener(event, function (event) {
            event.preventDefault();
            callback(event);
          });
        });
      }
      return elementHTML;
    }
    function ComponentElementDiv(_ref5) {
      var _ref5$attributes = _ref5.attributes,
        attributes = _ref5$attributes === void 0 ? [] : _ref5$attributes,
        _ref5$text = _ref5.text,
        text = _ref5$text === void 0 ? '' : _ref5$text,
        _ref5$children = _ref5.children,
        children = _ref5$children === void 0 ? [] : _ref5$children,
        _ref5$events = _ref5.events,
        events = _ref5$events === void 0 ? [] : _ref5$events;
      return new _ComponentElement({
        element: 'div',
        attributes: attributes,
        children: children,
        events: events,
        text: text
      });
    }
    function ComponentElementP(_ref6) {
      var _ref6$attributes = _ref6.attributes,
        attributes = _ref6$attributes === void 0 ? [] : _ref6$attributes,
        _ref6$text = _ref6.text,
        text = _ref6$text === void 0 ? '' : _ref6$text,
        _ref6$events = _ref6.events,
        events = _ref6$events === void 0 ? [] : _ref6$events,
        _ref6$children = _ref6.children,
        children = _ref6$children === void 0 ? [] : _ref6$children;
      return new _ComponentElement({
        element: 'p',
        attributes: attributes,
        text: text,
        events: events,
        children: children
      });
    }
    function ComponentElementFigure(_ref7) {
      var _ref7$attributes = _ref7.attributes,
        attributes = _ref7$attributes === void 0 ? [] : _ref7$attributes,
        _ref7$children = _ref7.children,
        children = _ref7$children === void 0 ? [] : _ref7$children,
        _ref7$events = _ref7.events,
        events = _ref7$events === void 0 ? [] : _ref7$events;
      return new _ComponentElement({
        element: 'figure',
        attributes: attributes,
        children: children,
        events: events
      });
    }
    function ComponentElementImage(_ref8) {
      var _ref8$attributes = _ref8.attributes,
        attributes = _ref8$attributes === void 0 ? [] : _ref8$attributes,
        _ref8$urlImage = _ref8.urlImage,
        urlImage = _ref8$urlImage === void 0 ? '' : _ref8$urlImage,
        _ref8$events = _ref8.events,
        events = _ref8$events === void 0 ? [] : _ref8$events;
      return new _ComponentElement({
        element: 'img',
        attributes: [].concat(_toConsumableArray(attributes), [new ComponentAttribute({
          id: 'src',
          value: urlImage
        })]),
        events: events
      });
    }
    function ComponentElementForm(_ref9) {
      var _ref9$attributes = _ref9.attributes,
        attributes = _ref9$attributes === void 0 ? [] : _ref9$attributes,
        _ref9$children = _ref9.children,
        children = _ref9$children === void 0 ? [] : _ref9$children,
        _ref9$events = _ref9.events,
        events = _ref9$events === void 0 ? [] : _ref9$events;
      return new _ComponentElement({
        element: 'form',
        attributes: attributes,
        children: children,
        events: events
      });
    }
    function ComponentElementLabel(_ref10) {
      var forValue = _ref10.forValue,
        _ref10$text = _ref10.text,
        text = _ref10$text === void 0 ? '' : _ref10$text,
        _ref10$attributes = _ref10.attributes,
        attributes = _ref10$attributes === void 0 ? [] : _ref10$attributes,
        _ref10$children = _ref10.children,
        children = _ref10$children === void 0 ? [] : _ref10$children,
        _ref10$events = _ref10.events,
        events = _ref10$events === void 0 ? [] : _ref10$events;
      return new _ComponentElement({
        element: 'label',
        text: text,
        attributes: [new ComponentAttribute({
          id: 'for',
          value: forValue
        })].concat(_toConsumableArray(attributes)),
        children: children,
        events: events
      });
    }
    function ComponentElementInput(_ref11) {
      var _ref11$typeInput = _ref11.typeInput,
        typeInput = _ref11$typeInput === void 0 ? 'text' : _ref11$typeInput,
        _ref11$placeHolder = _ref11.placeHolder,
        placeHolder = _ref11$placeHolder === void 0 ? '' : _ref11$placeHolder,
        _ref11$idInput = _ref11.idInput,
        idInput = _ref11$idInput === void 0 ? '' : _ref11$idInput,
        _ref11$attributes = _ref11.attributes,
        attributes = _ref11$attributes === void 0 ? [] : _ref11$attributes,
        _ref11$events = _ref11.events,
        events = _ref11$events === void 0 ? [] : _ref11$events;
      return new _ComponentElement({
        element: 'input',
        attributes: [new ComponentAttribute({
          id: 'type',
          value: typeInput
        }), new ComponentAttribute({
          id: 'id',
          value: idInput
        }), new ComponentAttribute({
          id: 'placeholder',
          value: placeHolder
        })].concat(_toConsumableArray(attributes)),
        events: events
      });
    }
    function ComponentElementInputSubmit(_ref12) {
      var _ref12$valueInput = _ref12.valueInput,
        valueInput = _ref12$valueInput === void 0 ? '' : _ref12$valueInput,
        _ref12$attributes = _ref12.attributes,
        attributes = _ref12$attributes === void 0 ? [] : _ref12$attributes,
        _ref12$events = _ref12.events,
        events = _ref12$events === void 0 ? [] : _ref12$events;
      return new _ComponentElement({
        element: 'input',
        attributes: [new ComponentAttribute({
          id: 'type',
          value: 'submit'
        }), new ComponentAttribute({
          id: 'value',
          value: valueInput
        })].concat(_toConsumableArray(attributes)),
        events: events
      });
    }
    function ComponentElementLink(_ref13) {
      var _ref13$text = _ref13.text,
        text = _ref13$text === void 0 ? '' : _ref13$text,
        _ref13$url = _ref13.url,
        url = _ref13$url === void 0 ? '/' : _ref13$url,
        _ref13$attributes = _ref13.attributes,
        attributes = _ref13$attributes === void 0 ? [] : _ref13$attributes,
        _ref13$events = _ref13.events,
        events = _ref13$events === void 0 ? [] : _ref13$events;
      return new _ComponentElement({
        element: 'a',
        text: text,
        attributes: [new ComponentAttribute({
          id: 'href',
          value: url
        })].concat(_toConsumableArray(attributes)),
        events: events
      });
    }
    function ComponentElementButton(_ref14) {
      var _ref14$text = _ref14.text,
        text = _ref14$text === void 0 ? '' : _ref14$text,
        _ref14$attributes = _ref14.attributes,
        attributes = _ref14$attributes === void 0 ? [] : _ref14$attributes,
        _ref14$events = _ref14.events,
        events = _ref14$events === void 0 ? [] : _ref14$events,
        _ref14$urlImage = _ref14.urlImage,
        urlImage = _ref14$urlImage === void 0 ? '' : _ref14$urlImage,
        _ref14$attributesImag = _ref14.attributesImage,
        attributesImage = _ref14$attributesImag === void 0 ? [] : _ref14$attributesImag;
      return new _ComponentElement({
        element: 'button',
        text: text,
        attributes: attributes,
        events: events,
        children: urlImage !== '' ? [new ComponentElementImage({
          urlImage: urlImage,
          attributes: [new ComponentAttribute({
            id: 'alt',
            value: 'add to cart'
          })].concat(_toConsumableArray(attributesImage))
        })] : []
      });
    }
    function ComponentElementLi(_ref15) {
      var _ref15$attributes = _ref15.attributes,
        attributes = _ref15$attributes === void 0 ? [] : _ref15$attributes,
        _ref15$text = _ref15.text,
        text = _ref15$text === void 0 ? '' : _ref15$text,
        _ref15$events = _ref15.events,
        events = _ref15$events === void 0 ? [] : _ref15$events,
        _ref15$children = _ref15.children,
        children = _ref15$children === void 0 ? [] : _ref15$children;
      return new _ComponentElement({
        element: 'li',
        attributes: attributes,
        events: events,
        children: children,
        text: text
      });
    }
    function ComponenteElementAside(_ref16) {
      var _ref16$attributes = _ref16.attributes,
        attributes = _ref16$attributes === void 0 ? [] : _ref16$attributes,
        _ref16$events = _ref16.events,
        events = _ref16$events === void 0 ? [] : _ref16$events,
        _ref16$children = _ref16.children,
        children = _ref16$children === void 0 ? [] : _ref16$children;
      return new _ComponentElement({
        element: 'aside',
        attributes: attributes,
        children: children,
        events: events
      });
    }
    function ComponenteElementSpan(_ref17) {
      var _ref17$attributes = _ref17.attributes,
        attributes = _ref17$attributes === void 0 ? [] : _ref17$attributes,
        _ref17$text = _ref17.text,
        text = _ref17$text === void 0 ? '' : _ref17$text,
        _ref17$events = _ref17.events,
        events = _ref17$events === void 0 ? [] : _ref17$events;
      return new _ComponentElement({
        element: 'span',
        attributes: attributes,
        text: text,
        events: events
      });
    }
    function ComponenteElementNav(_ref18) {
      var _ref18$attributes = _ref18.attributes,
        attributes = _ref18$attributes === void 0 ? [] : _ref18$attributes,
        _ref18$children = _ref18.children,
        children = _ref18$children === void 0 ? [] : _ref18$children,
        _ref18$events = _ref18.events,
        events = _ref18$events === void 0 ? [] : _ref18$events;
      return new _ComponentElement({
        element: 'nav',
        attributes: attributes,
        children: children,
        events: events
      });
    }
    function ComponenteElementUl(_ref19) {
      var _ref19$attributes = _ref19.attributes,
        attributes = _ref19$attributes === void 0 ? [] : _ref19$attributes,
        _ref19$children = _ref19.children,
        children = _ref19$children === void 0 ? [] : _ref19$children,
        _ref19$events = _ref19.events,
        events = _ref19$events === void 0 ? [] : _ref19$events;
      return new _ComponentElement({
        element: 'ul',
        attributes: attributes,
        children: children,
        events: events
      });
    }
    function ComponentElementSection(_ref20) {
      var _ref20$attributes = _ref20.attributes,
        attributes = _ref20$attributes === void 0 ? [] : _ref20$attributes,
        _ref20$children = _ref20.children,
        children = _ref20$children === void 0 ? [] : _ref20$children,
        _ref20$events = _ref20.events,
        events = _ref20$events === void 0 ? [] : _ref20$events;
      return new _ComponentElement({
        element: 'section',
        attributes: attributes,
        children: children,
        events: events
      });
    }
    module.exports = {
      ComponentAttribute: ComponentAttribute,
      ComponentEvent: ComponentEvent,
      ComponentElementDiv: ComponentElementDiv,
      ComponentElementP: ComponentElementP,
      ComponentElementFigure: ComponentElementFigure,
      ComponentElementImage: ComponentElementImage,
      ComponentElementForm: ComponentElementForm,
      ComponentElementLabel: ComponentElementLabel,
      ComponentElementInput: ComponentElementInput,
      ComponentElementInputSubmit: ComponentElementInputSubmit,
      ComponentElementLink: ComponentElementLink,
      ComponentElementButton: ComponentElementButton,
      ComponentElementLi: ComponentElementLi,
      ComponenteElementAside: ComponenteElementAside,
      ComponenteElementSpan: ComponenteElementSpan,
      ComponenteElementNav: ComponenteElementNav,
      ComponenteElementUl: ComponenteElementUl,
      ComponentElementSection: ComponentElementSection
    };
  }, {}],
  4: [function (require, module, exports) {
    var getAmountUnit = function getAmountUnit(product, limit) {
      var _product$info2;
      var options = '';
      for (var index = 0; index < (product === null || product === void 0 ? void 0 : (_product$info = product.info) === null || _product$info === void 0 ? void 0 : _product$info.amount); index++) {
        var _product$info;
        if (index + 1 === limit) {
          break;
        }
        options += "<option value=\"".concat(index + 1, "\">").concat(index + 1, " Unidad</option>");
      }
      if ((product === null || product === void 0 ? void 0 : (_product$info2 = product.info) === null || _product$info2 === void 0 ? void 0 : _product$info2.amount) > 6) {
        options += '<option value="+">Más 6 Unidades</option>';
      }
      return options;
    };
    var screenDetailProduct = function screenDetailProduct(_ref21) {
      var _product$product4, _product$product5, _product$info3;
      var product = _ref21.product;
      return "<div class=\"detail__grid\">\n    <div class=\"detail__contenido-img\">\n    <img class=\"detail__image\"\n        src=\"".concat((_product$product4 = product.product) === null || _product$product4 === void 0 ? void 0 : _product$product4.image, "\"\n        alt=\"\">\n    </div>\n    <div class=\"detail__description\">\n    <h2 class=\"detail__title\">").concat((_product$product5 = product.product) === null || _product$product5 === void 0 ? void 0 : _product$product5.name, "</h2>\n    <span class=\"detail__price\">$ 396.900</span>\n\n    <p>").concat(product !== null && product !== void 0 && product.available ? 'Producto Disponible' : 'Producto No Disponible', "</p>\n\n    <form action=\"\" class=\"formulario\">\n        <div class=\"formulario__campo formulario__campo--half\">\n        <label for=\"color\" class=\"formulario__label\">Color: </label>\n        <select class=\"formulario__input   formulario__input--select\"  id=\"color\">\n            <option value=\"\" selected disabled>-- Selccione un Color --</option>\n            ").concat(product === null || product === void 0 ? void 0 : product.info.colors.map(function (color) {
        return "<option value=\"".concat(color, "\">").concat(color, "</option>");
      }).join(''), "\n        </select>\n        </div>\n\n\n        <div class=\"formulario__campo formulario__campo--half\">\n        <label class=\"formulario__label\" for=\"cantidad\">Cantidad: </label>\n        <select class=\"formulario__input formulario__input--select\"  id=\"cantidad\">\n        ").concat(getAmountUnit(product, 7), "\n        </select>\n        </div>\n        \n        <div class=\"formulario__campo formulario__campo--flex-row\">\n            <input class=\"formulario__submit formulario__submit--pay\" type=\"submit\" value=\"Comprar ahora\" ").concat(product !== null && product !== void 0 && product.available ? '' : 'disabled', " />\n            <input class=\"formulario__submit formulario__submit--add\" type=\"submit\" value=\"Agregar al carrito\" ").concat(product !== null && product !== void 0 && product.available ? '' : 'disabled', " />\n        </div>\n\n    </form>\n    </div>\n\n    <div class=\"characteristic\">\n    <h3 class=\"characteristic__title\">Descripci\xF3n</h3>\n    <p class=\"characteristic__text\">").concat(product === null || product === void 0 ? void 0 : (_product$info3 = product.info) === null || _product$info3 === void 0 ? void 0 : _product$info3.description, "</p>\n    <div class=\"detail-product\">\n        <h3 class=\"detail-product__title\">Caracter\xEDsticas del producto</h3>\n\n        <div class=\"characteristics\">\n\n        ").concat(product.characteristics.map(function (_ref22) {
        var title = _ref22.title,
          data = _ref22.data;
        return "\n                <div class=\"characteristics__contenido\">\n                    <h3 class=\"characteristics__title\">".concat(title, "</h3>\n                    <ul class=\"characteristics__detail\">\n                        ").concat(data.map(function (_ref23) {
          var item = _ref23.item,
            value = _ref23.value;
          return "\n                                <li class=\"characteristics__item\">\n                                    ".concat(item, "<span class=\"characteristics__value\">").concat(value, "</span>\n                                </li>");
        }).join(''), "\n                    </ul>\n                </div>");
      }).join(''), "\n    </div>\n    </div>\n    </div>\n</div>");
    };
    module.exports = {
      screenDetailProduct: screenDetailProduct
    };
  }, {}],
  5: [function (require, module, exports) {
    var screenShoppingProduct = function screenShoppingProduct() {
      var productCart = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var shoppingContainer = document.createElement('div');
      shoppingContainer.setAttribute('class', 'shopping-my-cart');
      shoppingContainer.innerHTML = "\n<div class=\"shopping-my-cart__title-container\">\n    <img class=\"shopping-my-cart__imagen\" src=\"./assets/icons/flechita.svg\" alt=\"arrow\">\n    <p class=\"shopping-my-cart__title\">Mi Carrito de Compras</p>\n</div>\n\n<div class=\"shopping-my-cart__grid\">\n    <div class=\"shopping-my-cart__menu\">\n    <h3 class=\"shopping-my-cart__title-menu\">Menu</h3>\n    <ul class=\"shopping-my-cart__contenido-menu\">\n        <li class=\"shopping-my-cart__item-menu\">Lista de Deseos</li>\n        <li class=\"shopping-my-cart__item-menu\">Favoritos</li>\n        <li class=\"shopping-my-cart__item-menu\">Compras para Despues</li>\n    </ul>\n    </div>\n\n    <div class=\"shopping-my-cart__pay-contenido\">\n\n    <div class=\"shoppings\">\n\n     ".concat(productCart.map(function (_ref24) {
        var image = _ref24.image,
          name = _ref24.name,
          price = _ref24.price;
        return "\n        <div class=\"shopping-cart\">\n                <img class=\"shopping-cart__imagen\"\n                    src=\"".concat(image, "\"\n                    alt=\"bike\">\n                <p class=\"shopping-cart__title\">").concat(name, "</p>\n                <p class=\"shopping-cart__price\">").concat(Number(price).toLocaleString('es-CO'), "</p>\n        </div>\n        ");
      }).join(''), "\n       \n        </div>\n    </div>\n\n    <div class=\"shopping-my-cart__pay\">\n    <div class=\"order\">\n        <span class=\"order__title\">Total</span>\n        <p class=\"order__price\">$ ").concat(Number(productCart.reduce(function (total, _ref25) {
        var price = _ref25.price;
        return total + Number(price);
      }, 0)).toLocaleString(), " </p>\n    </div>\n\n    <div class=\"buttons-pay\">\n        <button class=\"button button--primary\">\n        Limpiar Carrito\n        </button>\n        <button class=\"button\">\n        Continuar Compra\n        </button>\n    </div>\n\n    </div>\n</div>\n");
      return shoppingContainer;
    };
    module.exports = {
      screenShoppingProduct: screenShoppingProduct
    };
  }, {}],
  6: [function (require, module, exports) {
    var _require4 = require('../components/screen/DetailProduct'),
      screenDetailProduct = _require4.screenDetailProduct;
    var _require5 = require('./RootController'),
      RootMainContainer = _require5.RootMainContainer;
    var detailProduct = function detailProduct(product) {
      console.log({
        product: product
      });
      var detailContainer = document.createElement('div');
      detailContainer.setAttribute('class', 'detail');
      detailContainer.innerHTML = screenDetailProduct({
        product: product
      });
      RootMainContainer({
        element: detailContainer
      });
    };
    module.exports = {
      detailProduct: detailProduct
    };
  }, {
    "../components/screen/DetailProduct": 4,
    "./RootController": 8
  }],
  7: [function (require, module, exports) {
    var ProductCard = require('../components/ProductCard');
    var _require6 = require('../services/ProductosService'),
      findAllProducts = _require6.findAllProducts;
    var _require7 = require('./DetailProductController'),
      detailProduct = _require7.detailProduct;
    var _require8 = require('./RootController'),
      RootMainContainer = _require8.RootMainContainer;
    var _require9 = require('./ShoppingCartController'),
      addProductShopping = _require9.addProductShopping;
    var onAddShopping = function onAddShopping(product) {
      addProductShopping(product);
    };
    var onDetaillProduct = function onDetaillProduct(product) {
      console.log('Click Detail');
      detailProduct(product);
    };
    var getAllProducts = function getAllProducts() {
      var products = findAllProducts();
      var productsContainer = document.createElement('div');
      productsContainer.setAttribute('class', 'productos');
      products.forEach(function (product) {
        productsContainer.appendChild(ProductCard(product, onAddShopping, onDetaillProduct));
      });
      RootMainContainer({
        element: productsContainer
      });
    };
    module.exports = {
      getAllProducts: getAllProducts
    };
  }, {
    "../components/ProductCard": 2,
    "../services/ProductosService": 12,
    "./DetailProductController": 6,
    "./RootController": 8,
    "./ShoppingCartController": 9
  }],
  8: [function (require, module, exports) {
    var root = document.querySelector('#root');
    var RootMainContainer = function RootMainContainer(_ref26) {
      var element = _ref26.element;
      root.innerHTML = '';
      root.appendChild(element);
    };
    module.exports = {
      RootMainContainer: RootMainContainer
    };
  }, {}],
  9: [function (require, module, exports) {
    var _require10 = require('../components/screen/ShoppingProduct'),
      screenShoppingProduct = _require10.screenShoppingProduct;
    var _require11 = require('../services/ProductosStorageService'),
      counterProductsShopping = _require11.counterProductsShopping,
      saveProductShopping = _require11.saveProductShopping,
      findAllProductsShopping = _require11.findAllProductsShopping;
    var _require12 = require('./RootController'),
      RootMainContainer = _require12.RootMainContainer;
    var counterShopping = document.querySelector('#counter-shopping');
    var shoppingCart = document.querySelector('#shopping-cart');
    var counterCartShopping = function counterCartShopping() {
      counterShopping.innerText = counterProductsShopping();
    };
    var addProductShopping = function addProductShopping(product) {
      saveProductShopping({
        product: product
      });
      counterCartShopping();
    };
    var showShoppingCart = function showShoppingCart() {
      shoppingCart.addEventListener('click', function () {
        var productCart = findAllProductsShopping();
        RootMainContainer({
          element: screenShoppingProduct(productCart)
        });
      });
    };
    module.exports = {
      counterCartShopping: counterCartShopping,
      addProductShopping: addProductShopping,
      showShoppingCart: showShoppingCart
    };
  }, {
    "../components/screen/ShoppingProduct": 5,
    "../services/ProductosStorageService": 13,
    "./RootController": 8
  }],
  10: [function (require, module, exports) {
    var _require13 = require('./ProductsController'),
      getAllProducts = _require13.getAllProducts;
    var _require14 = require('./RootController'),
      RootMainContainer = _require14.RootMainContainer;
    var _require15 = require('./ShoppingCartController'),
      counterCartShopping = _require15.counterCartShopping;
    module.exports = {
      getAllProducts: getAllProducts,
      counterCartShopping: counterCartShopping,
      RootMainContainer: RootMainContainer
    };
  }, {
    "./ProductsController": 7,
    "./RootController": 8,
    "./ShoppingCartController": 9
  }],
  11: [function (require, module, exports) {
    module.exports = [{
      product: {
        name: 'Celular Nokia 6300 - 4gb Negro',
        image: 'https://images.pexels.com/photos/3031670/pexels-photo-3031670.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        price: '396900'
      },
      available: true,
      discounts: {
        enabled: false,
        percentageDiscount: '0'
      },
      info: {
        category: '0012',
        description: 'Vive tus redes sociales con Nokia 6300 4G. Mantente conectado con todos tus seres queridos con WhatsApp y Facebook. Mantente al día con tu contenido favorito en YouTube y encuentra tu camino con Google Maps, todas estas experiencias son aún mejores y optimizadas con la velocidad 4G. Además, puedes encontrar respuestas, obtener información y comunicarte con amigos con Google Assistant. Además, ten conversaciones por más tiempo gracias a su diseño duradero.',
        colors: ['BLANCO', 'NEGRO', 'AZUL'],
        amount: 10
      },
      characteristics: [{
        title: 'Características generales',
        data: [{
          item: 'Marca',
          value: 'Nokia'
        }, {
          item: 'Modelo',
          value: '6300 4G'
        }]
      }, {
        title: 'Tarjeta SIM',
        data: [{
          item: 'Es Dual SIM',
          value: 'No'
        }, {
          item: 'Cantidad de ranuras para tarjeta SIM',
          value: '1'
        }, {
          item: 'Tamaños de tarjeta SIM compatibles',
          value: 'Nano-SIM'
        }]
      }, {
        title: 'Memoria',
        data: [{
          item: 'Memoria interna',
          value: '4 GB'
        }, {
          item: 'Memoria RAM',
          value: '512 MB'
        }, {
          item: 'Con ranura para tarjeta de memoria',
          value: 'Sí'
        }, {
          item: 'Tipos de tarjeta de memoria',
          value: 'Micro-SD'
        }]
      }, {
        title: 'Cámara',
        data: [{
          item: 'Con cámara',
          value: 'Sí'
        }, {
          item: 'Cámara Resolución de la cámara trasera principal',
          value: '0.3 Mpx'
        }]
      }]
    }, {
      product: {
        name: 'Bicicleta',
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        price: '296900'
      },
      available: false,
      discounts: {
        enabled: false,
        percentageDiscount: '0'
      },
      info: {
        category: '0012',
        description: 'Vive tus redes sociales con Nokia 6300 4G. Mantente conectado con todos tus seres queridos con WhatsApp y Facebook. Mantente al día con tu contenido favorito en YouTube y encuentra tu camino con Google Maps, todas estas experiencias son aún mejores y optimizadas con la velocidad 4G. Además, puedes encontrar respuestas, obtener información y comunicarte con amigos con Google Assistant. Además, ten conversaciones por más tiempo gracias a su diseño duradero.',
        colors: ['BLANCO'],
        amount: 1
      },
      characteristics: [{
        title: 'Características generales',
        data: [{
          item: 'Marca',
          value: 'Nokia'
        }, {
          item: 'Modelo',
          value: '6300 4G'
        }]
      }, {
        title: 'Tarjeta SIM',
        data: [{
          item: 'Es Dual SIM',
          value: 'No'
        }, {
          item: 'Cantidad de ranuras para tarjeta SIM',
          value: '1'
        }, {
          item: 'Tamaños de tarjeta SIM compatibles',
          value: 'Nano-SIM'
        }]
      }, {
        title: 'Memoria',
        data: [{
          item: 'Memoria interna',
          value: '4 GB'
        }, {
          item: 'Memoria RAM',
          value: '512 MB'
        }, {
          item: 'Con ranura para tarjeta de memoria',
          value: 'Sí'
        }, {
          item: 'Tipos de tarjeta de memoria',
          value: 'Micro-SD'
        }]
      }, {
        title: 'Cámara',
        data: [{
          item: 'Con cámara',
          value: 'Sí'
        }, {
          item: 'Cámara Resolución de la cámara trasera principal',
          value: '0.3 Mpx'
        }]
      }]
    }, {
      product: {
        name: 'Camara',
        image: 'https://images.pexels.com/photos/243757/pexels-photo-243757.jpeg?auto=compress&cs=tinysrgb&w=1600',
        price: '496900'
      },
      available: true,
      discounts: {
        enabled: false,
        percentageDiscount: '0'
      },
      info: {
        category: '0012',
        description: 'Vive tus redes sociales con Nokia 6300 4G. Mantente conectado con todos tus seres queridos con WhatsApp y Facebook. Mantente al día con tu contenido favorito en YouTube y encuentra tu camino con Google Maps, todas estas experiencias son aún mejores y optimizadas con la velocidad 4G. Además, puedes encontrar respuestas, obtener información y comunicarte con amigos con Google Assistant. Además, ten conversaciones por más tiempo gracias a su diseño duradero.',
        colors: ['BLANCO'],
        amount: 10
      },
      characteristics: [{
        title: 'Características generales',
        data: [{
          item: 'Marca',
          value: 'Nokia'
        }, {
          item: 'Modelo',
          value: '6300 4G'
        }]
      }, {
        title: 'Tarjeta SIM',
        data: [{
          item: 'Es Dual SIM',
          value: 'No'
        }, {
          item: 'Cantidad de ranuras para tarjeta SIM',
          value: '1'
        }, {
          item: 'Tamaños de tarjeta SIM compatibles',
          value: 'Nano-SIM'
        }]
      }, {
        title: 'Memoria',
        data: [{
          item: 'Memoria interna',
          value: '4 GB'
        }, {
          item: 'Memoria RAM',
          value: '512 MB'
        }, {
          item: 'Con ranura para tarjeta de memoria',
          value: 'Sí'
        }, {
          item: 'Tipos de tarjeta de memoria',
          value: 'Micro-SD'
        }]
      }, {
        title: 'Cámara',
        data: [{
          item: 'Con cámara',
          value: 'Sí'
        }, {
          item: 'Cámara Resolución de la cámara trasera principal',
          value: '0.3 Mpx'
        }]
      }]
    }, {
      product: {
        name: 'Televisor',
        image: 'https://media.istockphoto.com/id/1132958568/photo/playing-videogame-with-joystick-near-blank-white-tv-screen-mockup.jpg?b=1&s=612x612&w=0&k=20&c=22SdecqI1tiM_QhccqF4ZewfcTjkzb1PVvfqLkVgE3Q=',
        price: '1496900'
      },
      available: true,
      discounts: {
        enabled: false,
        percentageDiscount: '0'
      },
      info: {
        category: '0012',
        description: 'Vive tus redes sociales con Nokia 6300 4G. Mantente conectado con todos tus seres queridos con WhatsApp y Facebook. Mantente al día con tu contenido favorito en YouTube y encuentra tu camino con Google Maps, todas estas experiencias son aún mejores y optimizadas con la velocidad 4G. Además, puedes encontrar respuestas, obtener información y comunicarte con amigos con Google Assistant. Además, ten conversaciones por más tiempo gracias a su diseño duradero.',
        colors: ['BLANCO'],
        amount: 10
      },
      characteristics: [{
        title: 'Características generales',
        data: [{
          item: 'Marca',
          value: 'Nokia'
        }, {
          item: 'Modelo',
          value: '6300 4G'
        }]
      }, {
        title: 'Tarjeta SIM',
        data: [{
          item: 'Es Dual SIM',
          value: 'No'
        }, {
          item: 'Cantidad de ranuras para tarjeta SIM',
          value: '1'
        }, {
          item: 'Tamaños de tarjeta SIM compatibles',
          value: 'Nano-SIM'
        }]
      }, {
        title: 'Memoria',
        data: [{
          item: 'Memoria interna',
          value: '4 GB'
        }, {
          item: 'Memoria RAM',
          value: '512 MB'
        }, {
          item: 'Con ranura para tarjeta de memoria',
          value: 'Sí'
        }, {
          item: 'Tipos de tarjeta de memoria',
          value: 'Micro-SD'
        }]
      }, {
        title: 'Cámara',
        data: [{
          item: 'Con cámara',
          value: 'Sí'
        }, {
          item: 'Cámara Resolución de la cámara trasera principal',
          value: '0.3 Mpx'
        }]
      }]
    }, {
      product: {
        name: 'Computador',
        image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1600',
        price: '2496900'
      },
      available: true,
      discounts: {
        enabled: false,
        percentageDiscount: '0'
      },
      info: {
        category: '0012',
        description: 'Vive tus redes sociales con Nokia 6300 4G. Mantente conectado con todos tus seres queridos con WhatsApp y Facebook. Mantente al día con tu contenido favorito en YouTube y encuentra tu camino con Google Maps, todas estas experiencias son aún mejores y optimizadas con la velocidad 4G. Además, puedes encontrar respuestas, obtener información y comunicarte con amigos con Google Assistant. Además, ten conversaciones por más tiempo gracias a su diseño duradero.',
        colors: ['BLANCO'],
        amount: 10
      },
      characteristics: [{
        title: 'Características generales',
        data: [{
          item: 'Marca',
          value: 'Nokia'
        }, {
          item: 'Modelo',
          value: '6300 4G'
        }]
      }, {
        title: 'Tarjeta SIM',
        data: [{
          item: 'Es Dual SIM',
          value: 'No'
        }, {
          item: 'Cantidad de ranuras para tarjeta SIM',
          value: '1'
        }, {
          item: 'Tamaños de tarjeta SIM compatibles',
          value: 'Nano-SIM'
        }]
      }, {
        title: 'Memoria',
        data: [{
          item: 'Memoria interna',
          value: '4 GB'
        }, {
          item: 'Memoria RAM',
          value: '512 MB'
        }, {
          item: 'Con ranura para tarjeta de memoria',
          value: 'Sí'
        }, {
          item: 'Tipos de tarjeta de memoria',
          value: 'Micro-SD'
        }]
      }, {
        title: 'Cámara',
        data: [{
          item: 'Con cámara',
          value: 'Sí'
        }, {
          item: 'Cámara Resolución de la cámara trasera principal',
          value: '0.3 Mpx'
        }]
      }]
    }, {
      product: {
        name: 'Laptop',
        image: 'https://images.pexels.com/photos/459653/pexels-photo-459653.jpeg?auto=compress&cs=tinysrgb&w=1600',
        price: '496900'
      },
      available: true,
      discounts: {
        enabled: false,
        percentageDiscount: '0'
      },
      info: {
        category: '0012',
        description: 'Vive tus redes sociales con Nokia 6300 4G. Mantente conectado con todos tus seres queridos con WhatsApp y Facebook. Mantente al día con tu contenido favorito en YouTube y encuentra tu camino con Google Maps, todas estas experiencias son aún mejores y optimizadas con la velocidad 4G. Además, puedes encontrar respuestas, obtener información y comunicarte con amigos con Google Assistant. Además, ten conversaciones por más tiempo gracias a su diseño duradero.',
        colors: ['BLANCO'],
        amount: 10
      },
      characteristics: [{
        title: 'Características generales',
        data: [{
          item: 'Marca',
          value: 'Nokia'
        }, {
          item: 'Modelo',
          value: '6300 4G'
        }]
      }, {
        title: 'Tarjeta SIM',
        data: [{
          item: 'Es Dual SIM',
          value: 'No'
        }, {
          item: 'Cantidad de ranuras para tarjeta SIM',
          value: '1'
        }, {
          item: 'Tamaños de tarjeta SIM compatibles',
          value: 'Nano-SIM'
        }]
      }, {
        title: 'Memoria',
        data: [{
          item: 'Memoria interna',
          value: '4 GB'
        }, {
          item: 'Memoria RAM',
          value: '512 MB'
        }, {
          item: 'Con ranura para tarjeta de memoria',
          value: 'Sí'
        }, {
          item: 'Tipos de tarjeta de memoria',
          value: 'Micro-SD'
        }]
      }, {
        title: 'Cámara',
        data: [{
          item: 'Con cámara',
          value: 'Sí'
        }, {
          item: 'Cámara Resolución de la cámara trasera principal',
          value: '0.3 Mpx'
        }]
      }]
    }, {
      product: {
        name: 'Drones X',
        image: 'https://images.pexels.com/photos/336232/pexels-photo-336232.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        price: '496900'
      },
      available: true,
      discounts: {
        enabled: false,
        percentageDiscount: '0'
      },
      info: {
        category: '0012',
        description: 'Vive tus redes sociales con Nokia 6300 4G. Mantente conectado con todos tus seres queridos con WhatsApp y Facebook. Mantente al día con tu contenido favorito en YouTube y encuentra tu camino con Google Maps, todas estas experiencias son aún mejores y optimizadas con la velocidad 4G. Además, puedes encontrar respuestas, obtener información y comunicarte con amigos con Google Assistant. Además, ten conversaciones por más tiempo gracias a su diseño duradero.',
        colors: ['BLANCO'],
        amount: 10
      },
      characteristics: [{
        title: 'Características generales',
        data: [{
          item: 'Marca',
          value: 'Nokia'
        }, {
          item: 'Modelo',
          value: '6300 4G'
        }]
      }, {
        title: 'Tarjeta SIM',
        data: [{
          item: 'Es Dual SIM',
          value: 'No'
        }, {
          item: 'Cantidad de ranuras para tarjeta SIM',
          value: '1'
        }, {
          item: 'Tamaños de tarjeta SIM compatibles',
          value: 'Nano-SIM'
        }]
      }, {
        title: 'Memoria',
        data: [{
          item: 'Memoria interna',
          value: '4 GB'
        }, {
          item: 'Memoria RAM',
          value: '512 MB'
        }, {
          item: 'Con ranura para tarjeta de memoria',
          value: 'Sí'
        }, {
          item: 'Tipos de tarjeta de memoria',
          value: 'Micro-SD'
        }]
      }, {
        title: 'Cámara',
        data: [{
          item: 'Con cámara',
          value: 'Sí'
        }, {
          item: 'Cámara Resolución de la cámara trasera principal',
          value: '0.3 Mpx'
        }]
      }]
    }, {
      product: {
        name: 'Celular Nokia 6300 - 4gb Negro',
        image: 'https://images.pexels.com/photos/3031670/pexels-photo-3031670.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        price: '396900'
      },
      available: true,
      discounts: {
        enabled: false,
        percentageDiscount: '0'
      },
      info: {
        category: '0012',
        description: 'Vive tus redes sociales con Nokia 6300 4G. Mantente conectado con todos tus seres queridos con WhatsApp y Facebook. Mantente al día con tu contenido favorito en YouTube y encuentra tu camino con Google Maps, todas estas experiencias son aún mejores y optimizadas con la velocidad 4G. Además, puedes encontrar respuestas, obtener información y comunicarte con amigos con Google Assistant. Además, ten conversaciones por más tiempo gracias a su diseño duradero.',
        colors: ['BLANCO'],
        amount: 10
      },
      characteristics: [{
        title: 'Características generales',
        data: [{
          item: 'Marca',
          value: 'Nokia'
        }, {
          item: 'Modelo',
          value: '6300 4G'
        }]
      }, {
        title: 'Tarjeta SIM',
        data: [{
          item: 'Es Dual SIM',
          value: 'No'
        }, {
          item: 'Cantidad de ranuras para tarjeta SIM',
          value: '1'
        }, {
          item: 'Tamaños de tarjeta SIM compatibles',
          value: 'Nano-SIM'
        }]
      }, {
        title: 'Memoria',
        data: [{
          item: 'Memoria interna',
          value: '4 GB'
        }, {
          item: 'Memoria RAM',
          value: '512 MB'
        }, {
          item: 'Con ranura para tarjeta de memoria',
          value: 'Sí'
        }, {
          item: 'Tipos de tarjeta de memoria',
          value: 'Micro-SD'
        }]
      }, {
        title: 'Cámara',
        data: [{
          item: 'Con cámara',
          value: 'Sí'
        }, {
          item: 'Cámara Resolución de la cámara trasera principal',
          value: '0.3 Mpx'
        }]
      }]
    }, {
      product: {
        name: 'Bicicleta',
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        price: '296900'
      },
      available: true,
      discounts: {
        enabled: false,
        percentageDiscount: '0'
      },
      info: {
        category: '0012',
        description: 'Vive tus redes sociales con Nokia 6300 4G. Mantente conectado con todos tus seres queridos con WhatsApp y Facebook. Mantente al día con tu contenido favorito en YouTube y encuentra tu camino con Google Maps, todas estas experiencias son aún mejores y optimizadas con la velocidad 4G. Además, puedes encontrar respuestas, obtener información y comunicarte con amigos con Google Assistant. Además, ten conversaciones por más tiempo gracias a su diseño duradero.',
        colors: ['BLANCO'],
        amount: 10
      },
      characteristics: [{
        title: 'Características generales',
        data: [{
          item: 'Marca',
          value: 'Nokia'
        }, {
          item: 'Modelo',
          value: '6300 4G'
        }]
      }, {
        title: 'Tarjeta SIM',
        data: [{
          item: 'Es Dual SIM',
          value: 'No'
        }, {
          item: 'Cantidad de ranuras para tarjeta SIM',
          value: '1'
        }, {
          item: 'Tamaños de tarjeta SIM compatibles',
          value: 'Nano-SIM'
        }]
      }, {
        title: 'Memoria',
        data: [{
          item: 'Memoria interna',
          value: '4 GB'
        }, {
          item: 'Memoria RAM',
          value: '512 MB'
        }, {
          item: 'Con ranura para tarjeta de memoria',
          value: 'Sí'
        }, {
          item: 'Tipos de tarjeta de memoria',
          value: 'Micro-SD'
        }]
      }, {
        title: 'Cámara',
        data: [{
          item: 'Con cámara',
          value: 'Sí'
        }, {
          item: 'Cámara Resolución de la cámara trasera principal',
          value: '0.3 Mpx'
        }]
      }]
    }, {
      product: {
        name: 'Camara',
        image: 'https://images.pexels.com/photos/243757/pexels-photo-243757.jpeg?auto=compress&cs=tinysrgb&w=1600',
        price: '496900'
      },
      available: true,
      discounts: {
        enabled: false,
        percentageDiscount: '0'
      },
      info: {
        category: '0012',
        description: 'Vive tus redes sociales con Nokia 6300 4G. Mantente conectado con todos tus seres queridos con WhatsApp y Facebook. Mantente al día con tu contenido favorito en YouTube y encuentra tu camino con Google Maps, todas estas experiencias son aún mejores y optimizadas con la velocidad 4G. Además, puedes encontrar respuestas, obtener información y comunicarte con amigos con Google Assistant. Además, ten conversaciones por más tiempo gracias a su diseño duradero.',
        colors: ['BLANCO'],
        amount: 10
      },
      characteristics: [{
        title: 'Características generales',
        data: [{
          item: 'Marca',
          value: 'Nokia'
        }, {
          item: 'Modelo',
          value: '6300 4G'
        }]
      }, {
        title: 'Tarjeta SIM',
        data: [{
          item: 'Es Dual SIM',
          value: 'No'
        }, {
          item: 'Cantidad de ranuras para tarjeta SIM',
          value: '1'
        }, {
          item: 'Tamaños de tarjeta SIM compatibles',
          value: 'Nano-SIM'
        }]
      }, {
        title: 'Memoria',
        data: [{
          item: 'Memoria interna',
          value: '4 GB'
        }, {
          item: 'Memoria RAM',
          value: '512 MB'
        }, {
          item: 'Con ranura para tarjeta de memoria',
          value: 'Sí'
        }, {
          item: 'Tipos de tarjeta de memoria',
          value: 'Micro-SD'
        }]
      }, {
        title: 'Cámara',
        data: [{
          item: 'Con cámara',
          value: 'Sí'
        }, {
          item: 'Cámara Resolución de la cámara trasera principal',
          value: '0.3 Mpx'
        }]
      }]
    }, {
      product: {
        name: 'Televisor',
        image: 'https://media.istockphoto.com/id/1132958568/photo/playing-videogame-with-joystick-near-blank-white-tv-screen-mockup.jpg?b=1&s=612x612&w=0&k=20&c=22SdecqI1tiM_QhccqF4ZewfcTjkzb1PVvfqLkVgE3Q=',
        price: '1496900'
      },
      available: true,
      discounts: {
        enabled: false,
        percentageDiscount: '0'
      },
      info: {
        category: '0012',
        description: 'Vive tus redes sociales con Nokia 6300 4G. Mantente conectado con todos tus seres queridos con WhatsApp y Facebook. Mantente al día con tu contenido favorito en YouTube y encuentra tu camino con Google Maps, todas estas experiencias son aún mejores y optimizadas con la velocidad 4G. Además, puedes encontrar respuestas, obtener información y comunicarte con amigos con Google Assistant. Además, ten conversaciones por más tiempo gracias a su diseño duradero.',
        colors: ['BLANCO'],
        amount: 10
      },
      characteristics: [{
        title: 'Características generales',
        data: [{
          item: 'Marca',
          value: 'Nokia'
        }, {
          item: 'Modelo',
          value: '6300 4G'
        }]
      }, {
        title: 'Tarjeta SIM',
        data: [{
          item: 'Es Dual SIM',
          value: 'No'
        }, {
          item: 'Cantidad de ranuras para tarjeta SIM',
          value: '1'
        }, {
          item: 'Tamaños de tarjeta SIM compatibles',
          value: 'Nano-SIM'
        }]
      }, {
        title: 'Memoria',
        data: [{
          item: 'Memoria interna',
          value: '4 GB'
        }, {
          item: 'Memoria RAM',
          value: '512 MB'
        }, {
          item: 'Con ranura para tarjeta de memoria',
          value: 'Sí'
        }, {
          item: 'Tipos de tarjeta de memoria',
          value: 'Micro-SD'
        }]
      }, {
        title: 'Cámara',
        data: [{
          item: 'Con cámara',
          value: 'Sí'
        }, {
          item: 'Cámara Resolución de la cámara trasera principal',
          value: '0.3 Mpx'
        }]
      }]
    }, {
      product: {
        name: 'Computador',
        image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1600',
        price: '2496900'
      },
      available: true,
      discounts: {
        enabled: false,
        percentageDiscount: '0'
      },
      info: {
        category: '0012',
        description: 'Vive tus redes sociales con Nokia 6300 4G. Mantente conectado con todos tus seres queridos con WhatsApp y Facebook. Mantente al día con tu contenido favorito en YouTube y encuentra tu camino con Google Maps, todas estas experiencias son aún mejores y optimizadas con la velocidad 4G. Además, puedes encontrar respuestas, obtener información y comunicarte con amigos con Google Assistant. Además, ten conversaciones por más tiempo gracias a su diseño duradero.',
        colors: ['BLANCO'],
        amount: 10
      },
      characteristics: [{
        title: 'Características generales',
        data: [{
          item: 'Marca',
          value: 'Nokia'
        }, {
          item: 'Modelo',
          value: '6300 4G'
        }]
      }, {
        title: 'Tarjeta SIM',
        data: [{
          item: 'Es Dual SIM',
          value: 'No'
        }, {
          item: 'Cantidad de ranuras para tarjeta SIM',
          value: '1'
        }, {
          item: 'Tamaños de tarjeta SIM compatibles',
          value: 'Nano-SIM'
        }]
      }, {
        title: 'Memoria',
        data: [{
          item: 'Memoria interna',
          value: '4 GB'
        }, {
          item: 'Memoria RAM',
          value: '512 MB'
        }, {
          item: 'Con ranura para tarjeta de memoria',
          value: 'Sí'
        }, {
          item: 'Tipos de tarjeta de memoria',
          value: 'Micro-SD'
        }]
      }, {
        title: 'Cámara',
        data: [{
          item: 'Con cámara',
          value: 'Sí'
        }, {
          item: 'Cámara Resolución de la cámara trasera principal',
          value: '0.3 Mpx'
        }]
      }]
    }, {
      product: {
        name: 'Laptop',
        image: 'https://images.pexels.com/photos/459653/pexels-photo-459653.jpeg?auto=compress&cs=tinysrgb&w=1600',
        price: '496900'
      },
      available: true,
      discounts: {
        enabled: false,
        percentageDiscount: '0'
      },
      info: {
        category: '0012',
        description: 'Vive tus redes sociales con Nokia 6300 4G. Mantente conectado con todos tus seres queridos con WhatsApp y Facebook. Mantente al día con tu contenido favorito en YouTube y encuentra tu camino con Google Maps, todas estas experiencias son aún mejores y optimizadas con la velocidad 4G. Además, puedes encontrar respuestas, obtener información y comunicarte con amigos con Google Assistant. Además, ten conversaciones por más tiempo gracias a su diseño duradero.',
        colors: ['BLANCO'],
        amount: 10
      },
      characteristics: [{
        title: 'Características generales',
        data: [{
          item: 'Marca',
          value: 'Nokia'
        }, {
          item: 'Modelo',
          value: '6300 4G'
        }]
      }, {
        title: 'Tarjeta SIM',
        data: [{
          item: 'Es Dual SIM',
          value: 'No'
        }, {
          item: 'Cantidad de ranuras para tarjeta SIM',
          value: '1'
        }, {
          item: 'Tamaños de tarjeta SIM compatibles',
          value: 'Nano-SIM'
        }]
      }, {
        title: 'Memoria',
        data: [{
          item: 'Memoria interna',
          value: '4 GB'
        }, {
          item: 'Memoria RAM',
          value: '512 MB'
        }, {
          item: 'Con ranura para tarjeta de memoria',
          value: 'Sí'
        }, {
          item: 'Tipos de tarjeta de memoria',
          value: 'Micro-SD'
        }]
      }, {
        title: 'Cámara',
        data: [{
          item: 'Con cámara',
          value: 'Sí'
        }, {
          item: 'Cámara Resolución de la cámara trasera principal',
          value: '0.3 Mpx'
        }]
      }]
    }, {
      product: {
        name: 'Drones X',
        image: 'https://images.pexels.com/photos/336232/pexels-photo-336232.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        price: '496900'
      },
      available: true,
      discounts: {
        enabled: false,
        percentageDiscount: '0'
      },
      info: {
        category: '0012',
        description: 'Vive tus redes sociales con Nokia 6300 4G. Mantente conectado con todos tus seres queridos con WhatsApp y Facebook. Mantente al día con tu contenido favorito en YouTube y encuentra tu camino con Google Maps, todas estas experiencias son aún mejores y optimizadas con la velocidad 4G. Además, puedes encontrar respuestas, obtener información y comunicarte con amigos con Google Assistant. Además, ten conversaciones por más tiempo gracias a su diseño duradero.',
        colors: ['BLANCO'],
        amount: 10
      },
      characteristics: [{
        title: 'Características generales',
        data: [{
          item: 'Marca',
          value: 'Nokia'
        }, {
          item: 'Modelo',
          value: '6300 4G'
        }]
      }, {
        title: 'Tarjeta SIM',
        data: [{
          item: 'Es Dual SIM',
          value: 'No'
        }, {
          item: 'Cantidad de ranuras para tarjeta SIM',
          value: '1'
        }, {
          item: 'Tamaños de tarjeta SIM compatibles',
          value: 'Nano-SIM'
        }]
      }, {
        title: 'Memoria',
        data: [{
          item: 'Memoria interna',
          value: '4 GB'
        }, {
          item: 'Memoria RAM',
          value: '512 MB'
        }, {
          item: 'Con ranura para tarjeta de memoria',
          value: 'Sí'
        }, {
          item: 'Tipos de tarjeta de memoria',
          value: 'Micro-SD'
        }]
      }, {
        title: 'Cámara',
        data: [{
          item: 'Con cámara',
          value: 'Sí'
        }, {
          item: 'Cámara Resolución de la cámara trasera principal',
          value: '0.3 Mpx'
        }]
      }]
    }];
  }, {}],
  12: [function (require, module, exports) {
    var ProductosData = require('../db/ProductosData');
    var findAllProducts = function findAllProducts() {
      var products = JSON.stringify(ProductosData);
      return JSON.parse(products);
    };
    module.exports = {
      findAllProducts: findAllProducts
    };
  }, {
    "../db/ProductosData": 11
  }],
  13: [function (require, module, exports) {
    var productsStorage = [];
    var KINS_STORAGE = 'shopping';
    var saveProductsStorage = function saveProductsStorage(products) {
      localStorage.setItem(KINS_STORAGE, JSON.stringify(products));
    };
    var findAllProductsStorage = function findAllProductsStorage() {
      return JSON.parse(localStorage.getItem(KINS_STORAGE));
    };
    var saveProductShopping = function saveProductShopping(_ref27) {
      var _findAllProductsStora;
      var product = _ref27.product;
      productsStorage = (_findAllProductsStora = findAllProductsStorage()) !== null && _findAllProductsStora !== void 0 ? _findAllProductsStora : [];
      if (productsStorage.length > 0) {
        productsStorage.unshift(product);
      } else {
        productsStorage.push(product);
      }
      saveProductsStorage(productsStorage);
    };
    var findAllProductsShopping = function findAllProductsShopping() {
      productsStorage = findAllProductsStorage();
      return _toConsumableArray(productsStorage);
    };
    var counterProductsShopping = function counterProductsShopping() {
      var _productsStorage$leng, _productsStorage;
      productsStorage = findAllProductsStorage();
      return (_productsStorage$leng = (_productsStorage = productsStorage) === null || _productsStorage === void 0 ? void 0 : _productsStorage.length) !== null && _productsStorage$leng !== void 0 ? _productsStorage$leng : 0;
    };
    module.exports = {
      saveProductShopping: saveProductShopping,
      findAllProductsShopping: findAllProductsShopping,
      counterProductsShopping: counterProductsShopping
    };
  }, {}]
}, {}, [1]);