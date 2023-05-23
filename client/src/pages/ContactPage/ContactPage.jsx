import React from 'react';

import styles from './index.module.css';

function ContactPage() {
  return (
    <div className={styles.Container}>
      <div className={styles.Header}>
        <p className={styles.HeadingText}>Nhóm 07 - Công Cụ và Môi Trường Phát Triển Phần Mềm</p>
        <p className={styles.SubHeadingText}>
          Danh sách thành viên nhóm
        </p>
      </div>

      <div className={styles.TeamCardContainer}>
        <div className={styles.TeamCard}>
          <div className={styles.ImgWrapper}>
            <img
              alt="avatar"
              className={styles.TeamImg}
              src="https://howtodrawforkids.com/wp-content/uploads/2022/05/how-to-draw-an-easy-cat.jpg"
            />
          </div>
          <p className={styles.MemberName}>Phạm Phúc Bình - 20110252</p>
          <p className={styles.MemberPosition}>Leader</p>
          <div className={styles.SocialMediaLinks}>
            <a href="http://www.facebook.com/">
              <img
                alt="facebook"
                src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-fb.svg"
              />
            </a>
            <a href="http://www.instagram.com/">
              <img
                alt="instagram"
                src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-insta.svg"
              />
            </a>
            <a href="http://www.gmail.com/">
              <img
                alt="gmail"
                src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-mail.svg"
              />
            </a>
          </div>
        </div>
        <div className={styles.TeamCard}>
          <div className={styles.ImgWrapper}>
            <img
              alt="avatar"
              className={styles.TeamImg}
              src="https://img.freepik.com/premium-vector/cute-cat-with-seamless-cat-pattern-hand-cartoon-illustration-animal-nature_677202-14.jpg?w=2000"
            />
          </div>
          <p className={styles.MemberName}>Hứa Lộc Sơn - 20110712</p>
          <p className={styles.MemberPosition}>Developer</p>
          <div className={styles.SocialMediaLinks}>
            <a href="http://www.facebook.com/">
              <img
                alt="facebook"
                src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-fb.svg"
              />
            </a>
            <a href="http://www.instagram.com/">
              <img
                alt="instagram"
                src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-insta.svg"
              />
            </a>
            <a href="http://www.gmail.com/">
              <img
                alt="gmail"
                src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-mail.svg"
              />
            </a>
          </div>
        </div>
        <div className={styles.TeamCard}>
          <div className={styles.ImgWrapper}>
            <img
              alt="avatar"
              className={styles.TeamImg}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcNGsxEpmh3Anf_vdL644N0R80j95TI-ImkfrJrI1dpMZCEDN8hpovO_Lg390HX3lwKS8&usqp=CAU"
            />
          </div>
          <p className={styles.MemberName}>Ngô Vũ Nhật Nguyên - 20110268</p>
          <p className={styles.MemberPosition}>Document Writer</p>
          <div className={styles.SocialMediaLinks}>
            <a href="http://www.facebook.com/">
              <img
                alt="facebook"
                src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-fb.svg"
              />
            </a>
            <a href="http://www.instagram.com/">
              <img
                alt="instagram"
                src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-insta.svg"
              />
            </a>
            <a href="http://www.gmail.com/">
              <img
                alt="gmail"
                src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-mail.svg"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
