import * as AiIcons from "react-icons/ai";

export const SidebarData = [
  {
    title: "홈",
    path: "/ShoppingMall",
    cName: "nav-text",
  },
  {
    title: "이벤트",
    path: "/event",
    cName: "nav-text",
  },
  {
    title: "카테고리",
    path: "/category",
    cName: "nav-text",
  },
  {
    title: "판매하기",
    path: "/selling",
    cName: "nav-text",
  },
  {
    title: "장바구니",
    path: "/basket",
    cName: "nav-text",
  },
  {
    title: "고객센터",
    path: "/support",
    cName: "nav-text",
  },
];

export const SideBarUser = [
  {
    title: "로그인",
    path: "/login",
    icons: <AiIcons.AiOutlineLogin />,
    cName: "nav-text",
  },
  {
    title: "회원가입",
    path: "/register",
    icons: <AiIcons.AiOutlineUser />,
    cName: "nav-text",
  },
];
