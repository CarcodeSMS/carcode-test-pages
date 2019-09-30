(() => {
  const loadScript = (url, onLoad) => {
    // render widgets/tracker
    const script = document.createElement('script');

    script.type = 'text/javascript';
    script.async = true;
    script.src = url;

    if (onLoad) {
      script.addEventListener('load', onLoad, false);
    }

    script.addEventListener('error', () => {
      alert(`The following script ${url} failed to load. Please recheck configuration (ctrl + p) and network connection.`)
    }, false);

    document.getElementsByTagName('script')[0].parentNode.insertBefore(script, document.getElementsByTagName('script')[0]);
  };

  const loadWidget = () => {
    if (window.carcodeSettingsData.sdk) {
      window.__carcode = window.carcodeSettingsData.sdk;
    }

    loadScript(window.carcodeUrls[window.carcodeSettingsData.env].widget.replace(':dealerId', window.carcodeSettingsData.dealerId));
  };

  const loadEva = () => {
    loadScript('https://content-container.edmunds.com/850449.js');
  };

  const init = () => {
    if (!window.carcodeSettingsData) {
      return;
    }


    loadWidget();
    loadEva();
  };

  init();
})();
