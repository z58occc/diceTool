import { useState } from "react";
import uploadIcon from "../../assets/icons/upload.png";
import { basicFields } from "../roleCardData";
import FormField from "./FormField";

function BasicInfoSection() {
  const [preview, setPreview] = useState(null);

  function handleUpload(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    setPreview(URL.createObjectURL(file));
  }
  return (
    <>
      <section className="mb-5">
        <div className="mb-1">
          <span className="fs-7 me-2-5 text-primary">01</span>
          <span className="fs-4 fw-bold">基本資料</span>
        </div>
        <p className="text-muted border-bottom mb-4 pb-3">
          角色名稱與職業為必填，其餘可於遊戲中補上
        </p>
        <div className="d-flex">
          <label
            className="img-zone me-4
                border  d-flex flex-column justify-content-center align-items-center
                  "
          >
            {!preview ? (
              <>
                <img src={uploadIcon} alt="" className="mb-2" />
                <span className="text-secondary fs-7">上傳形象圖</span>
              </>
            ) : (
              <>
                <img
                  className="w-100 h-100 object-fit-cover"
                  src={preview}
                  alt="預覽圖"
                />
              </>
            )}
            <input
              type="file"
              hidden
              onChange={(e) => handleUpload(e)}
              accept="image/*"
            />
          </label>
          <ul className="list-unstyled d-flex flex-wrap data-right">
            <div
              className="d-flex justify-content-between
                    gap-3
                    "
            >
              {basicFields[0].map((item) => {
                return (
                  <FormField id={item.id} label={item.label} className="w-33" />
                );
              })}
            </div>
            <div className="d-flex justify-content-between gap-3">
              {basicFields[1].map((item) => {
                return (
                  <FormField id={item.id} label={item.label} className="w-25" />
                );
              })}
            </div>
          </ul>
        </div>
      </section>
    </>
  );
}
export default BasicInfoSection;
