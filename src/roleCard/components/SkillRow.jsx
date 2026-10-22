import { clamp, getLevels } from "../roleCardUtils";

function SkillRow({ skill, onChange }) {
  const final = clamp(skill.base + skill.occupation + skill.interest);

  const { hard, extreme } = getLevels(final);

  return (
    <tr>
      <th className="fw-normal text-nowrap text-start">
        <input
          className="border-0"
          value={skill.name}
          onChange={(e) => onChange({ name: e.target.value })}
        />
      </th>
      <td>{skill.base}</td>
      <td>
        <input
          className="point-input"
          type="number"
          value={skill.occupation}
          onChange={(e) =>
            onChange({ occupation: clamp(Number(e.target.value)) })
          }
        />
      </td>
      <td>
        <input
          className="point-input"
          type="number"
          value={skill.interest}
          onChange={(e) =>
            onChange({ interest: clamp(Number(e.target.value)) })
          }
        />
      </td>
      <td>
        <span className="fs-5">{final}</span>
      </td>
      <td>
        {hard}/{extreme}
      </td>
    </tr>
  );
}

export default SkillRow;
