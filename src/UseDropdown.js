import React, { useState } from "react";

const useDropdown = (label, defaultState, options) => {
    const [state, setState] = useState(defaultState);
    const id = `use-dropdown-${label.replace(" ", "").toLowerCase()}`;

    const Dropdown = () => (
        <label htmlFor={id}>
            {label}
            <select
                id={id}
                value={state}
                onChange={(e) => setState(e.target.value)}
                onBlur={(e) => setState(e.target.value)}
                disabled={!options.length}
            >
                <option>All</option>
                {options.map((opt) => (
                    <option key={opt} value={opt}>
                        {opt}
                    </option>
                ))}
            </select>
        </label>
    );

    return [Dropdown, state, setState];
};

export default useDropdown;
