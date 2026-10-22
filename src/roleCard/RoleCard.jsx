import { useEffect, useState } from "react";
import BasicInfoSection from "./components/BasicInfoSection";
import AttributeSection from "./components/AttributeSection";
import SkillSection from "./components/SkillSection";
import InventorySection from "./components/InventorySection";
import BackgroundSection from "./components/BackgroundSection";
import SideMenu from "./components/SideMenu";
import Aside from "./components/Aside";
import {
  defaltAttributes,
  defaltSkills,
  defaltInventory,
  defaltWeapon,
  defaltState,
} from "./roleCardData";

function RoleCard() {
  const [newInventory, setNewInventory] = useState("");
  const [weapon, setWeapon] = useState(defaltWeapon);
  const [attributes, setAttributes] = useState(defaltAttributes);
  const [skills, setSkills] = useState(defaltSkills);
  const [inventory, setInventory] = useState(defaltInventory);
  const [derivedState, setDeriveState] = useState(defaltState);
  const [wordCount, setWordCount] = useState(0);
  const preview = null;

  // 換圖或元件卸載時釋放舊網址，避免記憶體洩漏
  useEffect(() => {
    return () => {
      if (preview) {
        URL.revokeObjectURL(preview);
      }
    };
  }, [preview]);

  return (
    <>
      <div className="container">
        <div className="d-flex w-100  ">
          <SideMenu />
          <main className="main border">
            <BasicInfoSection />

            <AttributeSection
              attributes={attributes}
              setAttributes={setAttributes}
            />

            <SkillSection skills={skills} setSkills={setSkills} />

            <InventorySection
              inventory={inventory}
              setInventory={setInventory}
              weapon={weapon}
              setWeapon={setWeapon}
              setNewInventory={setNewInventory}
              newInventory={newInventory}
            />

            <BackgroundSection
              wordCount={wordCount}
              setWordCount={setWordCount}
            />
          </main>
          <Aside derivedState={derivedState} setDeriveState={setDeriveState} />
        </div>
      </div>
    </>
  );
}

export default RoleCard;
