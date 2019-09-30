const urls = {
  dev: {
    widget: 'https://dev-dsg11-www.carcodesms.com/widgets/:dealerId.js',
    inventories: 'https://dev-ext-www.carcode.com/carcode/v1/ccapi/dealer/:rooftopId/inventories/widget/search?pagesize=5&pagenum=1',
    inventory: 'https://qa-11-www.edmunds.com/api/inventory/v5/find',
  },
  qa: {
    widget: 'https://qa-dsg11-www.carcodesms.com/widgets/:dealerId.js',
    inventories: 'https://qa-ext-www.carcode.com/carcode/v1/ccapi/dealer/:rooftopId/inventories/widget/search?pagesize=5&pagenum=1',
    inventory: 'https://qa-11-www.edmunds.com/api/inventory/v5/find',
  },
  prod: {
    widget: 'https://www.carcodesms.com/widgets/:dealerId.js',
    inventories: 'https://www.carcode.com/carcode/v1/ccapi/dealer/:rooftopId/inventories/widget/search?pagesize=5&pagenum=1',
    inventory: 'https://www.edmunds.com/api/inventory/v5/find',
  },
};

window.carcodeUrls = urls;
