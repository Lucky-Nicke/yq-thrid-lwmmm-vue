import request from '@/utils/request'
// 定义基本的url
const BASE_URL = '/admin/system/sysRole';

export default {
    getPageList(page, limit, searchObj) {
        return request({
            url: `${BASE_URL}/${page}/${limit}`,
            method: 'get',
            params: searchObj
        })
    },
    removeById(id) {
        return request({
            url: `${BASE_URL}/deleteBatch`,
            method: 'delete',
            data: id
        })
    },
    saveRole(role) {
        return request({
            url: `${BASE_URL}/addRole`,
            method: 'post', // 提交方式为 post
            data: role // 传递json 数据
        })
    },
    getRoleById(id) {
        return request({
            url: `${BASE_URL}/findRoleById/${id}`,
            method: 'get',
        })
    },
    updateRole(role) {
        return request({
            url: `${BASE_URL}/updateRole`,
            method: 'post',
            data: role // 传递json 数据
        })
    },
    //批量 删除
    bactchremoveId(ids) {
        return request({
            url: `${BASE_URL}/deleteBatch`,
            method: 'delete', // 提交方式
            data: ids
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