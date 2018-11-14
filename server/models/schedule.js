var mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ScheduleSchema = new Schema({
    semester: String,
    schedule: {
        m_10_12: {},
        m_12_2: {},
        m_2_4: {},
        m_4_6: {},
        m_6_11: {},
        t_10_12: {},
        t_12_2: {},
        t_2_4: {},
        t_4_6: {},
        t_6_11: {},
        w_10_12: {},
        w_12_2: {},
        w_2_4: {},
        w_4_6: {},
        w_6_11: {},
        th_10_12: {},
        th_12_2: {},
        th_2_4: {},
        th_4_6: {},
        th_6_11: {},
        f_10_12: {},
        f_12_2: {},
        f_2_4: {},
        f_4_6: {},
        f_6_11: {},
        s_10_12: {},
        s_12_2: {},
        s_2_4: {},
        s_4_6: {},
        s_6_11: {},
        su_10_12: {},
        su_12_2: {},
        su_2_4: {},
        su_4_6: {},
        su_6_11: {}
    }
});

module.exports = mongoose.model("Schedule", ScheduleSchema);