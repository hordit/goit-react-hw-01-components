import { Profile } from "./Profile/Profile";
import user from "./Data/user.json";
import { Statistics } from "./Statistics/Statistics";
import data from "./Data/data.json";
import { FriendList } from "./Friends/FriendList";
import friends from "./Data/friends.json";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
import transaction from "./Data/transaction.json"
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

