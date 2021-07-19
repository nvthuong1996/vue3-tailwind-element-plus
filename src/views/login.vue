<template>
  <div>
    <div class="w-1/3 m-auto p-10 border shadow-sm mt-10">
      <el-form label-position="top">
        <el-form-item label="Tên tài khoản">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="Mật khẩu">
          <el-input></el-input>
        </el-form-item>
        <div class="flex justify-center">
          <el-button type="primary" class="mt-5">Đăng nhập</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  auth: "guest",
};
</script>

<style></style>
