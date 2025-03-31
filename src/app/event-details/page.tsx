import EventDetails from "@/components/events/event-details";
import Wrapper from "@/layout/Wrapper";

export const metadata = {
   title: "Events Details - Hope Foundation Dominica - Hope For Today, Hope For Tomorrow",
};
const index = () => {
   return (
      <Wrapper>
         <EventDetails />
      </Wrapper>
   )
}

export default index