import styles from "../styles";

export default function About() {
    return (
        <article>
        <section className={styles.about.container}>
            <h2 className={styles.about.title}> Why Choose Illareia Insurance? </h2>
            <div className={styles.about.subcontainer}>
            <img src='/about.png' alt="About Us Image" className={styles.about.img} />
                    <p className={styles.about.description}>
                    There are a lot of insurance agents out there and it may seem like any agent or broker is as good as another. But we are decidedly different. <br />

Let's face it, insurance jargon can be very confusing. We know the ins and outs of the insurance business, and our inside knowledge of many companies and many products will work to your advantage. In fact, different insurance companies often charge vastly different premiums for the exact same coverage. As independent agents we are not employed by one particular company. Instead, we can select insurance products from among those companies that best address your unique concerns.
<br />
We promise to focus our attention on your benefit exclusively. Please don't hesitate to call us with your questions no matter whether you are already a valued customer, a potential client or if you simply need expert advice. There will never be a charge for our assistance or for a friendly, no-obligation chat.
                    </p>
            </div>
        </section>

        <section className={styles.aboutme.container}>
            <h2 className={styles.about.title}> Who Am I? </h2>
            <div className={styles.about.subcontainer}>
                    <p className={styles.about.description}>
                    I have been in the insurance industry for 14 years focusingprimarily in the Senior Market. I started this journey as an insurance agent (sitting around kitchen tables talking about Medicare, and life insurance) I began with NYL, andthen I realized the market needed to have " Trusted Subject Matter Experts" that were unbiased, could oversee all the plans, and do the best for theSenior. Now we could finally advocate and offer the 13K seniors turning 65daily a plethora of options to find the right health plan & drug plan.We also assisted with all state and federal programs to help lower their <span className={styles.aboutme.highlight}>RX costs</span>. With the passage of the Affordable Care Act their was a paradigm shiftin the way employers offer coverage with a push towards preventive medicine& reduced hospital admissions. We are working with physicians and hospitalsto help improve the patient outcomes. We now have a shift from FFS to valuebased care. With the Social Determinants of Health now being recognized asmajor contributors in healthcare costs / outcomes we are collaborating withMeals on Wheels, Taub Foundation & others to “ Share One Voice “ to addressthese issues. 
                    </p>
            <img src='/aboutme.png' alt="About Me Image" className={styles.about.img} />
            </div>
            
        </section>
        </article>
    )   
}