<!-- test product -->
<div id='product-component-1609820499983'></div>
      <script type="text/javascript">
      /*<![CDATA[*/
      (function () {
        var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
        if (window.ShopifyBuy) {
          if (window.ShopifyBuy.UI) {
            ShopifyBuyInit();
          } else {
            loadScript();
          }
        } else {
          loadScript();
        }
        function loadScript() {
          var script = document.createElement('script');
          script.async = true;
          script.src = scriptURL;
          (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
          script.onload = ShopifyBuyInit;
        }
        function ShopifyBuyInit() {
          var client = ShopifyBuy.buildClient({
            domain: 'erin-wong-handmade.myshopify.com',
            storefrontAccessToken: 'b8c440563242cc8d193f297e17f9e0de',
          });
          ShopifyBuy.UI.onReady(client).then(function (ui) {
            ui.createComponent('product', {
              id: '6210126971054',
              node: document.getElementById('product-component-1609820499983'),
              moneyFormat: '%24%7B%7Bamount%7D%7D',
              options: {
        "product": {
          "styles": {
            "product": {
              "@media (min-width: 601px)": {
                "max-width": "calc(25% - 20px)",
                "margin-left": "20px",
                "margin-bottom": "50px"
              }
            },
            "button": {
              "font-family": "Karla, sans-serif",
              "font-size": "16px",
              "padding-top": "16px",
              "padding-bottom": "16px",
              ":hover": {
                "background-color": "#8c8c8c"
              },
              "background-color": "#9b9b9b",
              ":focus": {
                "background-color": "#8c8c8c"
              },
              "border-radius": "0px",
              "padding-left": "53px",
              "padding-right": "53px"
            },
            "quantityInput": {
              "font-size": "16px",
              "padding-top": "16px",
              "padding-bottom": "16px"
            }
          },
          "text": {
            "button": "Add to cart"
          },
          "googleFonts": [
            "Karla"
          ]
        },
        "productSet": {
          "styles": {
            "products": {
              "@media (min-width: 601px)": {
                "margin-left": "-20px"
              }
            }
          }
        },
        "modalProduct": {
          "contents": {
            "img": false,
            "imgWithCarousel": true,
            "button": false,
            "buttonWithQuantity": true
          },
          "styles": {
            "product": {
              "@media (min-width: 601px)": {
                "max-width": "100%",
                "margin-left": "0px",
                "margin-bottom": "0px"
              }
            },
            "button": {
              "font-family": "Karla, sans-serif",
              "font-size": "16px",
              "padding-top": "16px",
              "padding-bottom": "16px",
              ":hover": {
                "background-color": "#8c8c8c"
              },
              "background-color": "#9b9b9b",
              ":focus": {
                "background-color": "#8c8c8c"
              },
              "border-radius": "0px",
              "padding-left": "53px",
              "padding-right": "53px"
            },
            "quantityInput": {
              "font-size": "16px",
              "padding-top": "16px",
              "padding-bottom": "16px"
            }
          },
          "googleFonts": [
            "Karla"
          ],
          "text": {
            "button": "Add to cart"
          }
        },
        "cart": {
          "styles": {
            "button": {
              "font-family": "Karla, sans-serif",
              "font-size": "16px",
              "padding-top": "16px",
              "padding-bottom": "16px",
              ":hover": {
                "background-color": "#8c8c8c"
              },
              "background-color": "#9b9b9b",
              ":focus": {
                "background-color": "#8c8c8c"
              },
              "border-radius": "0px"
            }
          },
          "text": {
            "total": "Subtotal",
            "button": "Checkout"
          },
          "googleFonts": [
            "Karla"
          ]
        },
        "toggle": {
          "styles": {
            "toggle": {
              "font-family": "Karla, sans-serif",
              "background-color": "#9b9b9b",
              ":hover": {
                "background-color": "#8c8c8c"
              },
              ":focus": {
                "background-color": "#8c8c8c"
              }
            },
            "count": {
              "font-size": "16px"
            }
          },
          "googleFonts": [
            "Karla"
          ]
        }
      },
            });
          });
        }
      })();
      /*]]>*/
      </script>