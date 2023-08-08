import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * Initialization data for the syntheticus_lab_theme extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'syntheticus_lab_theme:plugin',
  description: 'A JupyterLab extension.',
  autoStart: true,
  requires: [IThemeManager],
  activate: (app: JupyterFrontEnd, manager: IThemeManager) => {
    console.log('JupyterLab extension syntheticus_lab_theme is activated!');
    const style = 'syntheticus_lab_theme/index.css';

    manager.register({
      name: 'syntheticus_lab_theme',
      isLight: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  }
};

export default plugin;
