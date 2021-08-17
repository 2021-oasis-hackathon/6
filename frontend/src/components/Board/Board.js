import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import BoardCardList from './BoardCardList';

function Board() {

  const [menus, setMenu] = useState([
    { 
      id: 1,
      name: "간호대학",
      active: false,
    },
    { 
      id: 2,
      name: "경영대학",
      active: false,
    },
    { 
      id: 3,
      name: "공과대학",
      active: false,
    },
    { 
      id: 4,
      name: "농업생명과학대학",
      active: false,
    },
    { 
      id: 5,
      name: "법과대학",
      active: false,
    },
    { 
      id: 6,
      name: "사범대학",
      active: false,
    },
    { 
      id: 7,
      name: "사회과학대학",
      active: false,
    },
    { 
      id: 8,
      name: "생활과학대학",
      active: false,
    },
    { 
      id: 9,
      name: "수의과대학",
      active: false,
    },
    { 
      id: 10,
      name: "약학대학",
      active: false,
    },
    { 
      id: 11,
      name: "예술대학",
      active: false,
    },
    { 
      id: 12,
      name: "의과대학",
      active: false,
    },
    { 
      id: 13,
      name: "자연과학대학",
      active: false,
    },
    { 
      id: 14,
      name: "특수대학",
      active: false,
    },
  ]);

  const [id, setId] = useState(1);

  const onClickMenu = (e) => {
    const but = document.getElementsByClassName("navigaion__menu");
        if (e.target.classList[1] === ".navigaion__menu_clicked") {
            e.target.classList.add(".navigaion__menu_clicked");
        } else {
            for (var i = 0; i < 4; i++){
                but[i].classList.remove(".navigaion__menu_clicked");
            }
            e.target.classList.add(".navigaion__menu_clicked");
        }
    setId(e.target.id);
  }
  return (
    <>
      <SideNavigationBlock>
        <div className="container">
          <ul className="navigation">
            <li className="navigation__group">
              <h5 className="navigation__group-name">단과대학 게시판</h5>
              <ul className="navigaion__menu-list">
                {
                  menus.map(menu => {
                    return (
                      <li className="navigaion__menu" id={menu.id} onClick={onClickMenu}>
                            {menu.name}
                      </li>
                    );
                  })
                }
              </ul>
            </li>
          </ul>
        </div>
      </SideNavigationBlock>
      <BoardCardList number={id} />
    </>
  );
}

export default Board;

const SideNavigationBlock = styled.div`
  .container {
    padding: 0 2em;
  }
  .navigation__group {
    width: 9em;
  }
  .navigation__group-name {
    font-weight: 700;
    font-size: 1.3em;
    padding: 17px 0;
    margin-bottom: 15px;
    border-bottom: 1px solid #adb5bd;
  }
  .navigaion__menu {
    line-height: 200%;
    font-weight: 500;
    font-size: 0.95em;
    color: #868e96;
    cursor: pointer;
  }
  .navigaion__menu_clicked {
    font-size: 1.2em;
    font-weight: 700;
    color: #2ec4b6;
  }
  .recruit-on_toggle {
    font-size: 1.2em;
    font-weight: 700;
    color: #2ec4b6;
  }  
`;