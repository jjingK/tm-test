import DataStorage from './DataStorage';
import EmailList from './EmailList';
import View from './View';
import { domHelper } from './helpers';

domHelper.attachEvent(window.document, 'DOMContentLoaded', function() {
  const dataStorage = new DataStorage();
  const emailList = new EmailList(window.aEmailData, dataStorage);
  const view = new View(emailList);

  view.render();
});
