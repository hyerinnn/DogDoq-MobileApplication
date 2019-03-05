import OrgMain from "./Org/OrgMain";
import Medicalcertificate from "./documents/Medicalcertificate";
import Healthcare from "./documents/Healthcare";
import Org1Write from "./Org/Org1Write";
import Org2Write from "./Org/Org2Write";
import Org3Write from "./Org/Org3Write";
import Org1Search from "./Org/Org1Search";
import Org2Search from "./Org/Org2Search";
import Org3Search from "./Org/Org3Search";
import OrgLogin from "./Org/OrgLogin";
import OrgRegisterDog from "./Org/OrgRegisterDog";
import OrgCheckDog from "./Org/OrgCheckDog";
import OrgRegisterOwner from "./Org/OrgRegisterOwner";
import Invokehealthcare from "./documents/InvokeHealthcare";
import Queryhealthcare from "./documents/QueryHealthcare";
import Queryhealthcareuser from "./documents/QueryHealthcareUser";
import Invokecontract from "./documents/InvokeContract";
import Querycontract from "./documents/QueryContract";
import Invokebirth from "./documents/InvokeBirth";
import Querybirth from "./documents/QueryBirth";
import Querybirthuser from "./documents/QueryBirthUser";
import Invokesales from "./documents/InvokeSales";
import Querysales from "./documents/QuerySales";
import Querysalesuser from "./documents/QuerySalesUser";
import Invokemedical from "./documents/InvokeMedical";
import Querymedical from "./documents/QueryMedical";
import Querymedicaluser from "./documents/QueryMedicalUser";
import OrgRegister from "./Org/OrgRegister";
import Home from "./components/Home";
import UserMain from "./User/UserMain";
import UserLogin from "./User/UserLogin";
import UserRegister from "./User/UserRegister";
import UserQuery from "./User/UserQuery";
import Test from "./User/Test";

import { createStackNavigator, createAppContainer } from "react-navigation";

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home
  },

  //User/////////////////////////////////

  userLogin: {
    screen: UserLogin,
    navigationOptions: {
      header: null
    }
  },
  userdog: {
    screen: UserMain
  },
  userregister: {
    screen: UserRegister
  },
  userquery: {
    screen: UserQuery
  },

  //Org/////////////////////////////////

  orgLogin: {
    screen: OrgLogin,
    navigationOptions: {
      header: null
    }
  },
  orgHome: {
    screen: OrgMain
  },
  orgregisterdog: {
    screen: OrgRegisterDog
  },
  orgcheckdog: {
    screen: OrgCheckDog
  },
  orgregister: {
    screen: OrgRegister
  },
  orgregisterowner: {
    screen: OrgRegisterOwner
  },
  org1Write: {
    screen: Org1Write
  },
  org2Write: {
    screen: Org2Write
  },
  org3Write: {
    screen: Org3Write
  },
  org1Search: {
    screen: Org1Search
  },
  org2Search: {
    screen: Org2Search
  },
  org3Search: {
    screen: Org3Search
  },

  //invoke//////////////////////////////

  invokehealthcare: {
    screen: Invokehealthcare
  },
  invokemedical: {
    screen: Invokemedical
  },
  invokecontract: {
    screen: Invokecontract
  },
  invokebirth: {
    screen: Invokebirth
  },
  invokesales: {
    screen: Invokesales
  },

  //query///////////////////////////////

  queryhealthcare: {
    screen: Queryhealthcare
  },
  queryhealthcareuser: {
    screen: Queryhealthcareuser
  },
  querymedical: {
    screen: Querymedical
  },
  querymedicaluser: {
    screen: Querymedicaluser
  },
  querycontract: {
    screen: Querycontract
  },
  querybirth: {
    screen: Querybirth
  },
  querybirthuser: {
    screen: Querybirthuser
  },
  querysales: {
    screen: Querysales
  },
  querysalesuser: {
    screen: Querysalesuser
  },

  //document///////////////////////////////////
  medicalcertificate: {
    screen: Medicalcertificate,
    navigationOptions: {
      header: null
    }
  },
  healthcare: {
    screen: Healthcare,
    navigationOptions: {
      header: null
    }
  }
});

export default createAppContainer(AppNavigator);
