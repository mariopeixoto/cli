export const up = (queryInterface, Sequelize) => {
  return queryInterface
    .createTable('<%= tableName %>', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

      <% _.each(attributes, function (dataType, fieldName) { %>
        <%= fieldName %>: {
          type: Sequelize.<%= dataType.toUpperCase() %>
        },
      <% }) %>

      <%= createdAt %>: {
        allowNull: false,
        type: Sequelize.DATE
      },

      <%= updatedAt %>: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
}

export const down = (queryInterface, Sequelize) => {
  return queryInterface.dropTable('<%= tableName %>')
}
