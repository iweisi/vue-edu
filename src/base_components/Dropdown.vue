<template>
    <el-row class="block-col-3">
        <el-col :span="8">
            <el-dropdown trigger="click">
                <span class="el-dropdown-link">
                    乐器选择<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>吉他</el-dropdown-item>
                    <el-dropdown-item>钢琴</el-dropdown-item>
                    <el-dropdown-item>架子鼓</el-dropdown-item>
                    <el-dropdown-item>小提琴</el-dropdown-item>
                    <el-dropdown-item>大提琴</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </el-col>
        <el-col :span="8">
            <el-dropdown trigger="click">
                <span class="el-dropdown-link">
                    类别选择<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>鼓手</el-dropdown-item>
                    <el-dropdown-item>吉他手</el-dropdown-item>
                    <el-dropdown-item>主唱</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </el-col>
        <el-col :span="8">
            <el-dropdown trigger="click">
                <span class="el-dropdown-link">
                    课程选择<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>零基础教学</el-dropdown-item>
                    <el-dropdown-item>流行钢琴课</el-dropdown-item>
                    <el-dropdown-item>简单懂乐理</el-dropdown-item>
                    <el-dropdown-item>弹唱吉他乐</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </el-col>
    </el-row>
</template>

<style lang="scss" scoped>
    .el-col-8{
        text-align: center;
        i{
            font-weight: bold;
        }
    }
    .el-popper{
        margin-top: -6px !important;        
    }
</style>
