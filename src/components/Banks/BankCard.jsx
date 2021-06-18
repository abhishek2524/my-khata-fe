import React, { useRef, useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Buttons from "../common/Button";

// import axis from "./../../assets/images/banks_logo/axis.png";
import { bankLogo } from "./../../constants/bankLogo";

function BankCard(props) {
  const { bank, totalAmount, isActive, bankID, accountHolder, accountType } =
    props.data;
  const ref = useRef();
  const [boxRect, setBoxRect] = useState({});

  const set = () =>
    setBoxRect(ref && ref.current ? ref.current.getBoundingClientRect() : {});

  useEffect(() => {
    set();
    const myRef = ref.current;
    if (myRef) {
      myRef.addEventListener("mousemove", (e) => {
        const xPos = (e.clientX - boxRect.left) / boxRect.width;
        const yPos = (e.clientY - boxRect.top) / boxRect.height - 0.6;
        const xOffset = -(xPos - 0.6);
        const dxNorm = Math.min(Math.max(xOffset, -0.6), 0.6);
        myRef.style.transform = `perspective(50px)
          rotateY(${dxNorm * 4}deg)
          rotateY(${xPos * 0}deg)
          rotateX(${dxNorm * 0}deg)
          rotateX(${yPos * 0}deg)
          `;
      });
      myRef.addEventListener("mouseleave", () => {
        myRef.style.transform = "none";
      });
    }
    return () => {
      if (myRef) {
        myRef.removeEventListener("mousemove", set);
        myRef.removeEventListener("mouseleave", set);
      }
    };
  }, [boxRect.top]);

  return (
    <div className="bankCard">
      <Card
        style={{ width: "100%" }}
        className={`bg-${bankLogo[bank][1]}`}
        ref={ref}
      >
        <Card.Img variant="top" src={bankLogo[bank][0]} />
        <Card.Body>
          <Link
            to={{
              pathname: `/${process.env.REACT_APP_BASE}/account-detail/${bankID}`,
              state: {
                isActive,
                accountHolder,
                bankname: bankLogo[bank][1],
                accountType,
              },
            }}
          >
            <Card.Title
              style={{ textTransform: "capitalize" }}
            >{`${accountHolder}`}</Card.Title>
          </Link>
          <Card.Text>{`Rs.${totalAmount}/-`}</Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">
          <div className="bank-actions">
            <Buttons
              className="del"
              variant="info"
              onClick={() => props.onEdit(props.data)}
              icon={"fa fa-edit"}
              disabled={!props.data.isActive}
            >
              Edit
            </Buttons>
            <Buttons
              className="edit"
              variant={props.data.isActive ? "danger" : "primary"}
              onClick={() => props.onDelete(props.data)}
              icon={props.data.isActive ? "fa fa-trash" : "fa fa-check"}
            >
              {props.data.isActive ? "Deactivate" : "Activate"}
            </Buttons>
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
}

export default BankCard;
