import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
  } from "@material-tailwind/react";
import { useSelector } from "react-redux";
import { PersonalInfo } from "./PersonalInfo";
import { Reviews } from "./Reviews";
import { Security } from "./Security";
   
  export default function SettingsIndex() {
    const user = useSelector((state) => state.auth.user);
    const data = [
      {
        label: "Personal Info",
        value: "html",
        desc: <PersonalInfo/>,
      },
      {
        label: "Security",
        value: "react",
        desc: <Security/>,
      },
      {
        label: "Reviews",
        value: "vue",
        desc:  user?.account_type === 'Administrator'? "" : <Reviews/>,
      },
    ];
   
    return (
      <Tabs value="html">
        <TabsHeader>
          {data.map(({ label, value }) => (
            <Tab key={value} value={value}>
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody>
          {data.map(({ value, desc }) => (
            <TabPanel key={value} value={value}>
              {desc}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    );
  }
