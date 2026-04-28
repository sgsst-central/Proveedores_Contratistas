function doGet(e) {
  const page = (e && e.parameter && e.parameter.page)
    ? e.parameter.page
    : 'inicio';

  const appUrl = ScriptApp.getService().getUrl();

  try {
    let template;
    let title = 'Cartillas SST';

    if (page === 'contratistas') {
      template = HtmlService.createTemplateFromFile('cartilla_contratistas');
      title = 'Cartilla de Contratistas';
    } else if (page === 'proveedores') {
      template = HtmlService.createTemplateFromFile('cartilla_proveedores');
      title = 'Cartilla de Proveedores';
    } else {
      template = HtmlService.createTemplateFromFile('inicio');
      title = 'Cartillas SST';
    }

    template.appUrl = appUrl;

    return template
      .evaluate()
      .setTitle(title)
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);

  } catch (error) {
    return HtmlService.createHtmlOutput(
      '<div style="font-family:Arial,sans-serif;padding:30px;">' +
      '<h2 style="color:#d62e27;">Error al cargar</h2>' +
      '<p>Ocurrió un problema al abrir la página.</p>' +
      '<pre style="background:#f4f4f4;padding:15px;border-radius:8px;">' +
      error.message +
      '</pre>' +
      '</div>'
    );
  }
}