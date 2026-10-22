import dataIcon from "../../assets/icons/I.png";
import skillIcon from "../../assets/icons/I-2.png";
import attributeIcon from "../../assets/icons/I-5.png";
import itemIcon from "../../assets/icons/I-3.png";
import backgroundIcon from "../../assets/icons/I-4.png";

function SideMenu() {
  const menu = [
    {
      str: "基本資料",
      img: dataIcon,
      id: "basic-info",
    },
    {
      str: "屬性數值",
      img: attributeIcon,
      id: "attribute",
    },
    {
      str: "技能",
      img: skillIcon,
      id: "skills",
    },
    {
      str: "持有物",
      img: itemIcon,
      id: "inventory",
    },
    {
      str: "背景與羈絆",
      img: backgroundIcon,
      id: "background",
    },
  ];
  function scrollTo(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <>
      <aside className="aside-menu p-3 border  ">
        <ul className="menu list-unstyled position-sticky  sticky-top cursor-pointer">
          {menu.map((item) => {
            return (
              <li
                key={item.id}
                className="p-2 d-flex align-items-center mb-2 "
                onClick={() => scrollTo(item.id)}
              >
                <img src={item.img} alt="" className="icon me-2" />
                <span>{item.str}</span>
              </li>
            );
          })}
        </ul>
      </aside>
    </>
  );
}
export default SideMenu;
