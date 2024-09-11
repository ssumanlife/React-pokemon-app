// 타입을 선언해주는 파일
declare module "uuid" {
  const v4: () => string
  export { v4 }
}
