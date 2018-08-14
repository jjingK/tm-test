import EmailList from './EmailList';
import { domHelper, getOffsetParent } from './helpers';

export default class View {
  constructor() {
    this._listWrap = domHelper.find('.list_wrap');
    this._contentWrap = domHelper.find('.wrap_right');

    this._handleClick = this._handleClick.bind(this);
    this._handleDragStart = this._handleDragStart.bind(this);
    this._handleDragOver = this._handleDragOver.bind(this);
    this._handleDragEnd = this._handleDragEnd.bind(this);
    this._handleDelete = this._handleDelete.bind(this);
  }

  _handleClick(event) {
    const li = domHelper.parent(event.target, 'LI');
    const { uuid } = li.dataset;

    li.classList.add('select');

    this.onSelectItem && this.onSelectItem(uuid);
  }

  _handleDragStart(event) {
    // event.stopPropagation();

    const target = event.target;
    const dataTransfer = event;
    dataTransfer.effectAllowed = 'move';

    this._dragItem = target;
    this._clone(this._dragItem);
  }

  _handleDragOver(event) {
    // event.stopPropagation();

    const _target = event.target;
    const parent = domHelper.parent(_target, 'LI');
    const diffY = getOffsetParent(parent).top - event.clientY;

    if (diffY < 0) {
      this._dropPlace = parent;
    }  else {
      this._dropPlace = parent.nextElementSibling;
    }
    this._dragItem.style.display = 'none';
    this._listWrap.insertBefore(this._cloneItem, this._dropPlace);
    this._cloneItem.style.display = 'block';
  }

  _handleDragEnd() {
    // console.warn(this._dropPlace, this._dragItem, this._cloneItem);
    this._dragItem.remove();
    this._cloneItem.classList.remove('dragging');
    this._cloneItem.draggable = 'true';
    this._attachEvents(this._cloneItem);
  }

  _handleDelete(event) {
    event.stopPropagation();
    const li = domHelper.parent(event.target, 'LI');
    const uuid = li.dataset.uuid;

    li.remove();

    this.onDeleteItem && this.onDeleteItem(uuid);
  }

  _clone(element) {
    // console.warn('_clone', element);
    this._cloneItem = element.cloneNode(true);
    this._cloneItem.draggable = false;
    this._cloneItem.style.display = 'none';
    this._cloneItem.classList.add('dragging');
  }

  render(list) {
    this._listWrap.innerHTML = '';
    this._contentWrap.innerHTML = '';

    list.reduce((wrapper, item) => {
      wrapper.innerHTML += this._makeTemplate('list', item);
      return wrapper;
    }, this._listWrap);

    Array
      .from(domHelper.findAll('li', this._listWrap))
      .forEach(this._attachEvents);
  }

  renderItem(item) {
    this._contentWrap.innerHTML = this._makeTemplate('content', item);
  }

  resetItem() {
    this._contentWrap.innerHTML = '';
  }

  _attachEvents(target) {
    const deleteBtn = domHelper.find('.btn_mail_delete', target);
    domHelper.attachEvent(li, 'click', this._handleClick);
    domHelper.attachEvent(li, 'dragstart', this._handleDragStart);
    domHelper.attachEvent(li, 'dragover', this._handleDragOver);
    domHelper.attachEvent(li, 'dragend', this._handleDragEnd);
    domHelper.attachEvent(deleteBtn, 'click', this._handleDelete);
  }

  _makeTemplate(type, item) {
    const { uuid, sender, date, title, content, select } = item;
    let template = '';
    if (type === 'list') {
      template = `
        <li class="list_article ${select ? 'select' : ''}" data-uuid="${uuid}" draggable="true">
          <a href="${uuid}"></a>
          <div class="list_article_top">
              <p class="user_name ellipse">${sender}</p>
              <p class="send_date">${date}</p>
              <button class="btn_mail_delete"><span class="blind">삭제</span></button>
          </div>
          <div class="list_article_bottom">
              <p class="mail_title ellipse">${content}</p>
          </div>
          <button type="button" class="btn_list_move"><span class="blind">이동버튼</span></button>
        </li>
      `;
    } else if (type === 'content') {
      template = `
        <div class="content_top">
          <p class="user_name ellipse">${sender}</p>
          <p class="send_date">${date}</p>
          <p class="mail_title ellipse">${title}</p>
        </div>
        <div class="content_bottom">
          ${content.replace(/\n/g, '<br>')}
        </div>
      `;
    }
    return template;
  }
}
