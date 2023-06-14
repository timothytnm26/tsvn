import { Wrapper } from ".";
import { TSVN } from "../../components/TSVNLogo";
import TabContent from "../../components/TabComponent/TabContent";
import TabComponent from "../../components/TabComponent/Tabs";
export const tabs = [
  {
    title: "HÀ NỘI",
    id: "hn",
    icon: <TSVN />,
    color: "var(--speak-now-5)",
    content: TabContent,
  },
  {
    title: "ĐÀ NẴNG",
    id: "dn",
    icon: <TSVN />,
    color: "var(--speak-now-6)",
    content: TabContent,
  },
  {
    title: "SÀI GÒN",
    id: "hcm",
    icon: <TSVN />,
    color: "var(--speak-now-7)",
    content: TabContent,
  },
];

export const Form = () => {
  return (
    <Wrapper>
      <TabComponent tabs={tabs} />
    </Wrapper>
  );
};
