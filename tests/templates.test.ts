import assert from "assert";
import { helloTemplate, goodByeTemplate } from "../src/templates";
import { render } from "../src/functions";

describe("# 템플릿 테스트", () => {
  describe("# [안녕]", () => {
    it("[안녕] 템플릿이 정상적으로 채워지는지 확인합니다.", () => {
      const filledTemplate = render(helloTemplate, {id: "100"});
      assert.strictEqual(filledTemplate, "<@100> 어흥~");
    });
  });
  describe("# [잘가]", () => {
    it("[잘가] 템플릿이 정상적으로 채워지는지 확인합니다.", () => {
      const filledTemplate = render(goodByeTemplate, {id: "100"});
      assert.strictEqual(filledTemplate, "<@100> ㅃ2");
    });
  });
});
