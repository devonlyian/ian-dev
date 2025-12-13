import { Profile } from "@/types/data";

export const profile: Profile = {
  name: "Ian Kim",
  nameKo: "김이안",
  title: {
    en: "Backend Developer",
    ko: "백엔드 개발자",
  },
  location: {
    en: "Anyang, South Korea",
    ko: "대한민국 안양시",
  },
  email: "devonlyian@gmail.com",
  github: "https://github.com/devonlyian",
  linkedin: "https://www.linkedin.com/in/ian-kim-38b0582b0/",
  summary: [
    {
      en: "Experienced Backend Developer specializing in Kotlin/Spring ecosystem",
      ko: "Kotlin/Spring 생태계를 전문으로 하는 경력 백엔드 개발자",
    },
    {
      en: "Building scalable and reliable server-side applications",
      ko: "확장 가능하고 안정적인 서버 애플리케이션 구축",
    },
    {
      en: "Passionate about cloud-native architecture and DevOps practices",
      ko: "클라우드 네이티브 아키텍처와 DevOps에 열정적",
    },
    {
      en: "Strong focus on clean code and test-driven development",
      ko: "클린 코드와 테스트 주도 개발에 집중",
    },
  ],
};
