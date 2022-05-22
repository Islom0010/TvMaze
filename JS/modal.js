
function _createModal(options) {
  const modal = document.createElement("div");
  modal.classList.add("my-class");
  modal.insertAdjacentHTML(
    "afterbegin",
    `<div class="modal-overlay">
    <div class="modal-window">
        <div class="modal-header">
            <span class="modal-title">
            Modal Title
            </span>
            <span class="modal-close">
            &times;</span>
            </span>
            </div>
        <div class="modal-body">
            Modal Body
        </div>
        <div class="modal-footer">
        <button>OK</button>
        <button>Cancel</button>
        </div>
        </div>
        </div>`
        );
  return modal;
}

$.modal = function (options) {
  const $modal = _createModal(options);

  return {
    open() {
      $modal.classList.add("open");
    },
    close() {
      $modal.classList.remove("open");
    },
    destroy() {},
  };
};
