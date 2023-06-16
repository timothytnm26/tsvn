import { FormContainer, Header, Wrapper } from ".";
import { useTranslation } from "react-i18next";
import { FORM_FIELDS, FORM_RESPONSE } from "../../constants";

interface FormData {
  name: string;
  dob: string;
  email: string;
  phone: string;
  fb_link: string;
  ticket_count: number;
  ticket_count_max: 4;
  bank_no: string;
  bill_image: string;
  note: string;
}
const FormSaiGon = () => {
  const { t } = useTranslation();
  const inf = "form_inf.sg";
  const formSG = FORM_FIELDS.sg;
  const action = formSG.form_url + FORM_RESPONSE;
  return (
    <Wrapper>
      <Header>{t(`${inf}.name`)}</Header>
      <FormContainer>
        <form action={action}>
          <section>
            <label htmlFor="name">{t("form.name")}</label>
            <input
              type="text"
              id="name"
              name={`entry.${formSG.inputs.name}`}
              required
            />
          </section>
          <section>
            <label htmlFor="dob">{t("form.dob")}</label>
            <input
              type="date"
              id="dob"
              name={`entry.${formSG.inputs.dob}`}
              required
            />
          </section>
          <section>
            <label htmlFor="email">{t("form.email")}</label>
            <input
              type="email"
              id="email"
              name={`entry.${formSG.inputs.email}`}
              required
            />
          </section>
          <section>
            <label htmlFor="phone">{t("form.phone")}</label>
            <input
              type="tel"
              id="phone"
              name={`entry.${formSG.inputs.phone}`}
              required
            />
          </section>
          <section>
            <label htmlFor="fb_link">{t("form.fb_link")}</label>
            <input
              type="url"
              id="fb_link"
              name={`entry.${formSG.inputs.fb_link}`}
              required
            />
          </section>
          <section>
            <label htmlFor="ticket_count">{t("form.ticket_count")}</label>
            <div>
              <input
                type="radio"
                name={`entry.${formSG.inputs.ticket_count}`}
                value="1"
                id="no1"
              />
              <label htmlFor="no1" className="radio">
                1
              </label>
            </div>
            <div>
              <input
                type="radio"
                name={`entry.${formSG.inputs.ticket_count}`}
                value="1"
                id="no2"
              />
              <label htmlFor="no2" className="radio">
                2
              </label>
            </div>
            <div>
              <input
                type="radio"
                name={`entry.${formSG.inputs.ticket_count}`}
                value="1"
                id="no3"
              />
              <label htmlFor="no3" className="radio">
                3
              </label>
            </div>
            <div>
              <input
                type="radio"
                name={`entry.${formSG.inputs.ticket_count}`}
                value="1"
                id="no4"
              />
              <label htmlFor="no4" className="radio">
                4
              </label>
            </div>
          </section>
          <section>
            <label htmlFor="bank_no">{t("form.bank_no")}</label>
            <input
              type="text"
              id="bank_no"
              name={`entry.${formSG.inputs.bank_no}`}
              required
            />
          </section>
          <section>
            <label htmlFor="bill_image">{t("form.bill_image")}</label>
            <input
              type="file"
              id="bill_image"
              name={`entry.${formSG.inputs.bill_image}`}
              required
            />
          </section>
          <section>
            <label htmlFor="note">{t("form.note")}</label>
            <textarea id="note" name={`entry.${formSG.inputs.note}`} required />
          </section>
          <button type="submit">{t("form.submit")}</button>
        </form>
      </FormContainer>
    </Wrapper>
  );
};
export default FormSaiGon;
