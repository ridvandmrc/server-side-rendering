import Head from "next/head";
import { contactUs } from "../../data/contact-us.json";

const ContactUs = (props: any) => {
  return (
    <>
      <Head>
        <title>Contact- us</title>
      </Head>
      <div>
        <div>
          <span>Address: </span>
          <span>{props.data.address}</span>
        </div>
        <div>
          <span>Mail: </span>
          <span>{props.data.mail}</span>
        </div>
        <div>
          <span>Tel: </span>
          <span>{props.data.no}</span>
        </div>
      </div>
    </>
  );
};

export default ContactUs;

// Should use this for fetching data for every request
export const getServerSideProps = async () => {
  return {
    props: {
      data: contactUs,
    },
  };
};
