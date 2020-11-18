import React from "react";

export const BannerModal = ({banner}) => {
  return (
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-body">
            `
            <iframe
              class="bannerPlayer"
              id="ytplayer"
              type="text/html"
              width="760"
              height="550"
              src={`https://www.youtube.com/embed/${banner[0].trailerId}?&origin=http://example.com`}
              frameborder="0"
              allowfullscreen
            />{" "}
            `
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
