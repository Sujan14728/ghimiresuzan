import styles from "@/styles/Contact.module.css";
import Image from "next/image";
import Link from "next/link";

const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1>Get in touch</h1>
        <form action="#">
          <div className={styles.left__wrapper}>
            <div className={styles.input__container}>
              <div className={styles.name__field}>
                <label htmlFor="name">Full Name:</label>
                <input type="text" required />
              </div>
              <div className={styles.email__field}>
                <label htmlFor="email">E-mail:</label>
                <input type="email" required />
              </div>
              <div className={styles.message__field}>
                <label htmlFor="message">Message:</label>
                <textarea
                  name="message"
                  id="message"
                  cols="20"
                  rows="10"
                  required
                ></textarea>
              </div>
              <div className={styles.btn__container}>
                <button>Submit</button>
              </div>
            </div>
          </div>
          <div className={styles.right__wrapper}>
            <div className={styles.info__container}>
              <h1>Contact Info</h1>
              <div className={styles.info__list}>
                <div className={styles.location__info}>
                  <Image
                    src="/images/icons/location.png"
                    width={40}
                    height={40}
                  />
                  <p>Itahari-19, Tarahara</p>
                </div>
                <div className={styles.email__info}>
                  <Image src="/images/icons/mail.png" width={40} height={40} />
                  <p>ghimire.amrit147@gmail.com</p>
                </div>
                <div className={styles.phone__info}>
                  <Image src="/images/icons/phone.png" width={40} height={40} />
                  <p>+977 9812345678</p>
                </div>
              </div>
              <div className={styles.social__links__container}>
                <h1>Follow on:</h1>
                <div className={styles.social__links}>
                  <div>
                    <Link href="https://www.facebook.com/amrit.ghimire.14/">
                      <Image
                        src="/images/social-icons/facebook.png"
                        alt="facebook"
                        width={30}
                        height={30}
                      />
                    </Link>
                  </div>
                  <div>
                    <Link href="https://www.linkedin.com/in/sujan-ghimire-9a8ab7237/">
                      <Image
                        src="/images/social-icons/linkedin.png"
                        alt="linkedin"
                        width={30}
                        height={30}
                      />
                    </Link>
                  </div>
                  <div>
                    <Link href="/">
                      <Image
                        src="/images/social-icons/twitter.png"
                        alt="twitter"
                        width={30}
                        height={30}
                      />
                    </Link>
                  </div>
                  <div>
                    <Link href="https://github.com/Sujan14728">
                      <Image
                        src="/images/social-icons/github.png"
                        alt="github"
                        width={30}
                        height={30}
                      />
                    </Link>
                  </div>
                  <div>
                    <Link href="https://www.instagram.com/ghimire7625/">
                      <Image
                        src="/images/social-icons/instagram.png"
                        alt="instagram"
                        width={30}
                        height={30}
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
