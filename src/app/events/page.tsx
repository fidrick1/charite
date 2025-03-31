import Event from "@/components/events/event";
import Wrapper from "@/layout/Wrapper";

export const metadata = {
   title: "Events - Hope Foundation Dominica - Hope For Today, Hope For Tomorrow",
};
const index = () => {
   return (
      <Wrapper>
         <Event />
      </Wrapper>
   )
}

export default index