import Button from "../Button/Button";
import Link from "./components/Links";
import { useState } from "react";
import {isActive} from "../../utils/utils.js"
export default function Header() {
  const [active, setActive] = useState(0);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "5px 15px",
        alignItems: "center",
        margin: 5,
        backgroundColor: "#444444",
        borderRadius: 10,
      }}
    >
      <div>
        <img src="/logo.png" alt="" />
      </div>
      <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
        <div style={{ display: "flex", gap: 20 }}>
          {["HOME", "BROADBAND PACKAGES", "SERVICES", "ABOUT US", "NEWS"].map(
            (item, index) => (
              <Link
                key={index}
                props={{
                  setActive: setActive,
                  index: index,
                  href: "#",
                  style: {
                    color: isActive(active, index) ? "yellow" : "white",
                    textDecoration: "none",
                    fontWeight: isActive(active, index) ? "bold" : "normal",
                  },
                  text: item,
                }}
              ></Link>
            )
          )}
        </div>
        <div>
          <Button
            props={{
              title: "CONTACT US",
              color: "#FCE207",
              padding: "10px 20px",
              textColor: "white",
            }}
          />
        </div>
      </div>
    </div>
  );
}
