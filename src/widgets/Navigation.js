/**
 * @file Navigation.js
 * @desc Navigation组件;
 * @author clouda-team(https://github.com/clouda-team)
 * @param {Object} classFactory 基类
 * @param {Object} Widget widget的基类
 * @return {Object} navigation组件对象
 */
define(['../core/Class', './Widget'], function (classFactory, Widget) {
    var navigation = classFactory.create({
        extend: Widget,
        type: 'navigation',
        /**
         * _init 是个别组件需要单独初始化的事项
         * @private
         * @param {Object} options 入参透传
         */
        _init: function (options) {
            this.itemTypes = ['items'];
            this.filterConfig = ['id', 'type'];
        }

    });
    return navigation;
});
