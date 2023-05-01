import { Profile } from "./Profile/Profile";
import user from "../user.json";
import { Statistics } from "./Statistics/Statistics";
import data from "../data.json";
import { FriendList } from "./Friend/FriendList";
import friends from "../friends.json";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
import transaction from "../transaction.json"
import { GlobalStyle } from "./GlobalStyle";

export const App = () => {
  return (
    <div>
      <GlobalStyle />

      <Profile user={user}/>

      {data && data.length > 0 && (
        <Statistics title="Upload stats" stats={data} />
      )}
      {!data && data.length === 0 && (
        <Statistics stats={data} />
      )}
      
      <FriendList friends={friends} />

      <TransactionHistory items={transaction} />
    </div>
  );
}

