import request from '@/utils/request'
// 定义基本的url
const BASE_URL = '/admin/system/sysUser';

export default {
    // 查询用户和分页
    getPageList(page, limit, searchObj) {
        return request({
            url: `${BASE_URL}/${page}/${limit}`,
            method: 'get',
            params: searchObj
        })
    },
    // 添加用户
    saveUser(user) {
        return request({
            url: `${BASE_URL}/addUser`,
            method: 'post',
            data: user
        })
    },
    //根据id获取用户信息
    getUserById(id) {
        return request({
            url: `${BASE_URL}/findUserById/${id}`,
            method: 'get',
        })
    },
    // 修改用户信息
    updateUser(user) {
        return request({
            url: `${BASE_URL}/updateUser`,
            method: 'post',
            data: user
        })
    },
    //删除用户
    removeUserById(id) {
        return request({
            url: `${BASE_URL}/deleteUser/${id}`,
            method: 'delete'
        })
    },
    //批量 删除
    bactchremoveId(ids) {
        return request({
            url: `${BASE_URL}/batchDeleteUser`,
            method: 'delete', // 提交方式
            data: ids
        })
    },
    //修改状态
    updateStatus(id, status) {
        return request({
            url: `${BASE_URL}/updateStatus/${id}/${status}`,
            method: 'get'
        })
    },
    //根据用户id查询用户已分配的角色
    getRolesByUserId(userId) {
        return request({
            url: `${BASE_URL}/toAssign/${userId}`,
            method: 'get'
        })
    },

    //分配角色
    assignRoles(assginRoleVo) {
        return request({
            url: `${BASE_URL}/doAssign`,
            method: 'post',
            data: assginRoleVo
        })
    }
}