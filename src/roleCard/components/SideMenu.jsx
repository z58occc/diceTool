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
    },
    {
      str: "屬性數值",
      img: attributeIcon,
    },
    {
      str: "技能",
      img: skillIcon,
    },
    {
      str: "持有物",
      img: itemIcon,
    },
    {
      str: "背景與羈絆",
      img: backgroundIcon,
    },
  ];
  return (
    <>
      <aside className="aside-menu p-3 border  ">
        <ul className="menu list-unstyled position-sticky  sticky-top cursor-pointer">
          {menu.map((item, i) => {
            return (
              <li
                key={i}
                className="p-2 d-flex align-items-center mb-2 "
                onClick={() =>
                  item.ref.current.scrollIntoView({
                    behavior: "smooth",
                  })
                }
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
